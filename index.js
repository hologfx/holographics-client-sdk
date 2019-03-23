const { services, path } = require('./services.json')
const URL = require('url').URL
const axios = require('axios')

class SDK {
  constructor(ip) {
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
          let url = `http://${this.ip}${route.replace(':id', id)}`

          let result = await axios({
            method: restMethod,
            url,
            data,
            validateStatus: function (status) {
              return status < 500; // Reject only if the status code is greater than or equal to 500
            }
          })
          return result.data
        }
      })
    })
  }
}

module.exports = SDK