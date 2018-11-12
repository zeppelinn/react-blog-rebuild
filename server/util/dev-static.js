const axios = require('axios')
const webpack = require('webpack')
const serverConfig = require('../../build/webpack.config.server')
const path = require('path')
const MemoryFileSystem = require('memory-fs')
const ReactDomServer = require('react-dom/server')
const proxy = require('http-proxy-middleware')

// ！！！开发环境中！！！
// 由于是使用的webpack-dev-server，所有打包的文件全都保存在内存中
// 我们没有办法直接读取到template.html，所以就通过http请求来获取
const getTemplate = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:9999/public/index.html')
            .then(res => {
                resolve(res.data)
            })
            .catch(reject)
    })
}

const Module = module.constructor

const mfs = new MemoryFileSystem()
const serverCompiler = webpack(serverConfig)
let serverBundle
// 指定webpack保存策略采用memory-fs，即保存在内存中
serverCompiler.outputFileSystem = mfs

// ！！！开发环境中！！！
// 监听webpack打包的所有文件是否有变化
// 参数stats就是webpack打包输出的东西，也就是我们要监听的东西
serverCompiler.watch({}, (err, stats) => {
    if(err) throw err
    stats = stats.toJson()
    stats.errors.forEach(error => console.error(error))
    stats.warnings.forEach(warning => console.warn(warning))

    // 获取bundle信息
    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    )
    // 此时获取到的bundle只是一个js文件的string 所以不能直接把它当做模块来使用
    // 一下方法将bundle内容的字符串读入到module中，就会生成一个真正的bundle模块了
    const bundle = mfs.readFileSync(bundlePath, 'utf-8')
    const m = new Module()
    m._compile(bundle, 'server-entry.js')
    serverBundle = m.exports.default
})

module.exports = function(app){

    // 这里需要注意的是，由于使用webpack-dev-server，webpack在开发环境中所打包的所有文件都保存在内存中
    // 所以不像server.js中可以使用express.static来区别静态文件(因为根本没有写到硬盘里)
    // 所以这里使用http-proxy-middleware来做代理找到对应的文件（/public前缀）
    app.use('/public', proxy({
        target:"http://localhost:9999"
    }))

    app.get("*", function(req, res){
        getTemplate()
            .then(template => {
                const content = ReactDomServer.renderToString(serverBundle)
                res.send(template.replace('<!-- app -->', content))
            })
    })
}