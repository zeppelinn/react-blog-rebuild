const express = require('express')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default
const fs = require('fs')
const path = require('path')

const template = fs.readFileSync(path.join(__dirname, "../dist/index.html"), 'utf8')
const app = express()

app.use('/public', express.static(path.join(__dirname, "../dist")))

app.get("*", function(req, res){
    const appString = ReactSSR.renderToString(serverEntry)
    const replacement = template.replace('<!-- app -->', appString)
    res.send(replacement)
})

app.listen(3001, () => {
    console.log('sample SSR start on port 3001')
})