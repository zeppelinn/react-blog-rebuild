const express = require('express')
const favicon = require('serve-favicon')
const serverRender = require('./util/server-render')
const fs = require('fs')
const path = require('path')

const isDev = process.env.NODE_ENV === "development"

const app = express()

app.use(favicon(path.join(__dirname, "../favicon.ico")))

if(!isDev){
    const serverEntry = require('../dist/server-entry')
    const template = fs.readFileSync(path.join(__dirname, "../dist/server.ejs"), 'utf8')
    app.use('/public', express.static(path.join(__dirname, "../dist")))
    app.get("*", function(req, res, next){
      serverRender(serverEntry, template, req, res)
        .catch(next)
    })
}else{
    const devStatic = require('./util/dev-static')
    devStatic(app)
}

// 处理报错
app.use(function(err, req, res, next){
  console.log(err)
  res.status(500).send(err)
})

app.listen(3001, () => {
    console.log('sample SSR start on port 3001')
})
