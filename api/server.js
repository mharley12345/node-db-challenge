const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
const DbRouter = require('../routes/dbRouter')
server.use(helmet())
server.use(express.json())
server.use(cors())


server.use(logger)
function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const time = new Date().toISOString();
    console.log(`a ${method} request to ${url} was made at ${time} o'clock.`)
    next()
  };
  server.use('/api/db',DbRouter)
module.exports = server