
//import json server

const jsonServer=require('json-server')

//creating server
const mediaServer=jsonServer.create()

//creating path
const router=jsonServer.router('db.json')

//middleware for returning json data
const middleware=jsonServer.defaults()

//setting up port
const PORT=5000||process.env.port

//using middleware and router
mediaServer.use(middleware)
mediaServer.use(router)

mediaServer.listen(PORT,()=>{
     console.log('port connected to 5000')
})

