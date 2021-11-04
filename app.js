require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routers/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(router)

module.exports = app