const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')

const isDev = process.env.NODE_ENV === "development"

const app = express()

if(!isDev){
    const serverEntry = require('../dist/server-entry').default
    const template = fs.readFileSync(path.join(__dirname, "../dist/index.html"), 'utf8')
    app.use('/public', express.static(path.join(__dirname, "../dist")))
    app.get("*", function(req, res){
        const appString = ReactSSR.renderToString(serverEntry)
        const replacement = template.replace('<!-- app -->', appString)
        res.send(replacement)
    })
}else{
    const devStatic = require('./util/dev-static')
    devStatic(app)
}

app.listen(3001, () => {
    console.log('sample SSR start on port 3001')
})
