//const express = require('express')
import express from 'express'
const app = express()
const port = process.env.PORT||'3000'
import web from './routes/web.js'
// load file 
app.set('view engine','ejs')
// static File 
app.use(express.static('public'))
// Load Routes
app.use ('/',web)


app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})