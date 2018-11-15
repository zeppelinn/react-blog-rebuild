const ejs = require('ejs')
const serialize = require('serialize-javascript')
const asyncBootstrap = require('react-async-bootstrapper').default
const ReactDomServer = require('react-dom/server')
const Helmet = require('react-helmet').default

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

module.exports = (bundle, template, req, res) => {
  return new Promise((resolve, reject) => {
    const createStoreMap = bundle.createStoreMap
    const createApp = bundle.default

    const routerContext = {}
    const stores = createStoreMap()
    const app = createApp(stores, routerContext, req.url)
    asyncBootstrap(app)
      .then(() => {
        const content = ReactDomServer.renderToString(app)
        // 处理服务端渲染时Redirect的问题
        // 如果前端Router存在Redirect的情况 react-router会给routerContext添加一个url属性
        // 一定要写在renderToString之后
        if(routerContext.url){
          res.status(302).setHeader('Location', routerContext.url)
          return res.end()
        }
        const helmet = Helmet.rewind()
        const state = getStoreState(stores)
        const rendingHtml = ejs.render(template, {
          appString: content,
          initialState: serialize(state),
          meta: helmet.meta.toString(),
          title: helmet.title.toString(),
          style: helmet.style.toString(),
          link: helmet.link.toString(),
        })
        res.send(rendingHtml)
        resolve()
      }).catch(reject)
  })
}
