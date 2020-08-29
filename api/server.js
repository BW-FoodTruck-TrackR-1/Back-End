const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const welcomeRouter = require("../welcome/welcome-router")
const dinerRouter = require("../diners/diner-router")
const dinerAuthRouter = require("../auth/diner-auth-router")
const operatorRouter = require("../operators/operator-router")
const operatorAuthRouter = require("../auth/operator-auth-router")
const dbConfig = require("../database/config")

const server = express()

// always comment this out before pushing commits. 
// conflicts with heroku
require('dotenv').config()
server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(cookieParser())
// always put this code back before pushing commits. comment out for localhost testing
// CHANGE FOR DEPLOY BASED ON FRONTEND DEPLOY URL. 
// // not until frontend is done or for testing
// server.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", 'https://front-end-two-chi.vercel.app')
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Set-Cookie")
//     res.header("Access-Control-Allow-Credentials", true)
//     next()
// })
// server.use(cors({
//     credentials: true,
//     origin: 'https://front-end-two-chi.vercel.app',
// }))

server.use("/", welcomeRouter)
server.use("/diners", dinerRouter)
server.use("/diners/auth", dinerAuthRouter)
server.use("/operators", operatorRouter)
server.use("/operators/auth", operatorAuthRouter)

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong",
  })
})

module.exports = server
