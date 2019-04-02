const { services, path } = require('./services.json')
const URL = require('url-parse')
const axios = require('axios')
const io = require('socket.io-client');
const EventEmitter = require('events').EventEmitter

class CommonSDK extends EventEmitter {
  constructor (ip, transport) {
    super()
    let url = new URL(ip)
    this.ip = url.host

    // Iterate over the services we have defined
    Object.keys(services).forEach((serviceName) => {
      let Service = services[serviceName]

      // Create an object on the SDK for every service
      this[serviceName] = {}

      // For every method on the Service, create a function
      Object.keys(Service).forEach((methodName) => {
        let method = Service[methodName]
        let { route, restMethod, args } = method
        
        this[serviceName][methodName] = async ({ id, data } = {}) => {
          if (args.includes('id') && id === undefined) throw Error("This method requires an ID parameter")
          if (args.includes('data') && data === undefined) throw Error("This method requires a data object")
          this.emit('request', { serviceName, methodName, id, data, eventName: method.eventName })
          let response = await transport(method, { id, data })
          if (response.code) {
            this.emit('error', response)
            console.error(response)
          } else {
            this.emit('response', response)
          }

          return response
        }
      })
    })
  }
}

class REST extends CommonSDK {
  constructor(ip) {
    super(ip, async (method, { id, data } = {}) => {
      let { restMethod } = method
      let url = `http://${this.ip}${method.route.replace(':id', id)}`

      let result = await axios({
        method: restMethod,
        url,
        data,
        validateStatus: function (status) {
          return status < 500; // Reject only if the status code is greater than or equal to 500
        }
      })

      if (result.data.code) {
        throw (result.data)
      }

      return result.data
    })
  }
}

class Socket extends CommonSDK {
  constructor(ip) {
    super(ip, (method, { id, data } = {}) => {
      return new Promise((resolve, reject) => {
        this.socket.emit(method.eventName, { id, data }, (response) => {
          resolve(response)
        })
      })
    })
    let io_client = io.connect(`http://${this.ip}`)
    Object.assign(this, { socket: io_client })
  }
}

export { REST, Socket }