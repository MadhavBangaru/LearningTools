const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const data =fs.readFileSync(path.join(__dirname,'certs','key.pem'),{encoding:'utf8'})
const data1 =fs.readFileSync('./certs/sample.txt',{encoding:'utf8'})

console.log(data)