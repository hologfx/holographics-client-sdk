const SDK = require("../index")
const expect = require('chai').expect
const { services, path } = require('../services.json')

var io = require('socket.io');

describe("holographics-client-sdk", function() {

  it ("has a REST API", function() {
    expect(SDK).to.have.property('REST')
  })

  it ("has a Socket API", function() {
    expect(SDK).to.have.property('Socket')
  })

  describe('REST API', function() {
    let REST;

    it ('creates a new SDK', function() {
      REST = new SDK.REST('http://127.0.0.1:3000')
    })

    // Iterate over the services we have defined
    Object.keys(services).forEach(function (serviceName) {
      describe(`${serviceName} service`, function() {
        it (`has a ${serviceName} object`, function() {
          expect(REST).to.have.property(serviceName)
        })

        Object.keys(services[serviceName]).forEach((methodName) => {
          it (`has a ${methodName} method`, function() {
            expect(REST[serviceName]).to.have.property(methodName)
          })
        })
      })
    })
  })

  describe('SOCKET API', function() {
    let server_socket
    let io_server
    let Socket

    before(() => {
      io_server = io.listen(5000)
      // setTimeout(done, 1000)
    })

    after(() => {
      // if (server_socket) server_socket.destroy()
      io_server.close()
      // setTimeout(done, 1000)
    })

    it ('creates a new SDK', function(done) {
      Socket = new SDK.Socket('http://127.0.0.1:5000')
      io_server.sockets.once('connection', function (s) {
        server_socket = s
        done()
      });
    })

    // Iterate over the services we have defined
    Object.keys(services).forEach(function (serviceName) {
      describe(`${serviceName} service`, function() {
        it (`has a ${serviceName} object`, function() {
          expect(Socket).to.have.property(serviceName)
        })

        Object.keys(services[serviceName]).forEach((methodName) => {
          let method = services[serviceName][methodName]

          it (`has a ${methodName} method`, function() {
            expect(Socket[serviceName]).to.have.property(methodName)
          })

          it (`sends ${method.eventName}`, function(done) {
            let params = {}
            if (method.args.includes('id')) params['id'] = {}
            if (method.args.includes('data')) params['data'] = {}
            server_socket.on(method.eventName, ({...params}, (response) => { done() }))
            Socket[serviceName][methodName]({...params})
          })
        })
      })
    })

  })

})