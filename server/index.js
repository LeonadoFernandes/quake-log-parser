const Hapi = require('hapi')
const server = new Hapi.Server()
const Parser = require('./models/parser')
const parser = new Parser()
parser.readFile(`${__dirname}/../data/games.log`)

server.connection({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080
})

require('./routes')(server, parser)
module.exports = server