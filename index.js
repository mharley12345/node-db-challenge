require('dotenv').config() //loads env variables
const server = require('./api/server')


server.get('/', (req,res)=>{
    res.send(`<title>I Work</title><h1>DB CHALLENGE</h1>`)
})
const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})