# react-blog-rebuild

npm install react --save
npm install webpack@^3.9.1 --save
npm install react-dom --save

安装babel
npm install babel-loader@^7.1.2 --save-dev
npm install babel-core@^6.26.0 --save-dev

安装html-webpack-plugin，它可以在webpack打包的过程中将entry中的js文件加入到html中，并根据output中的配置定向输出
npm install babel-preset-2015 babel-preset-2015-loose babel-preset-react --save-dev

**开发福利 1**<br/>
安装webpack dev server，webpack官方提供，将编译的文件提到内存当中，每次有文件变化就会自动编译，不需要手动执行<br/>
npm install webpack-dev-server@^2.9.5 --save-dev<br/>
npm install cross-env@^5.1.1 --save-dev<br/>
执行npm run dev:client 就可以执行webpack-dev-server并动态编译了<br/>

**开发福利 2**<br/>
安装hot module replacement，在页面上无刷新的更新效果<br/>
npm install react-hot-loader@^3.1.3 --save-dev<br/>

在内存中读写文件<br/>
npm install memory-fs --save-dev<br/>

express提供的代理中间件<br/>
npm install http-proxy-middleware --save-dev<br/>

安装eslint检查<br/>
npm install babel-eslint eslint-config-airbnb eslint-config-standard eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard --save-dev<br/>

安装husky<br/>
npm install husky --save-dev<br/>
同时在package.json中添加git commit钩子 "precommit" 和检查规则"lint"，这样每次执行git commit之前就会先检查代码样式，如果lint失败则无法提交<br/>

优化webpack配置 将相同的配置整合到一起<br/>
npm install webpack-merge --save-dev<br/>

安装标签图片<br/>
npm install serve-favicon --save<br/>

守护进程方式开启node<br/>
npm install nodemon --save-dev<br/>

安装babel插件，支持mobx的装饰器写法<br/>
 npm install babel-plugin-transform-decorators-legacy@^1.3.4 babel-preset-stage-1@^6.24.1 --save-dev<br/>

安装异步处理模块<br/>
npm install react-async-bootstrapper@^1.1.2 --save<br/>

安装ejs，使得服务端渲染时异步请求数据产生状态变化后可以修改html模板代码，同步更新客户端页面<br/>
npm install ejs-compiled-loader@^1.1.0 --save <br/>

安装serialize-javascript，将object序列化<br/>
npm install serialize-javascript@^1.4.0 --save <br/>

安装react-helmet组件，装饰服务端渲染的html的title、meta等标签<br/>
npm install react-helmet@^5.2.0 --save<br/>

React 16更新内容<br/>
1. 减少了react+react-dom的大小，在gzipped之后减少了10k左右(30多k)<br/>
2. 使用Fiber进行了重构<br/>
3. 增加了很多实用功能<br/>

React 16新特性<br/>
1. Error Boundary: 在React组件中增加了新的生命周期钩子**componentDidCatch**，该回调传入两个参数error(错误对象)和errorInfo(错误信息)，通过它我们可以捕获React在渲染过程中出现的一些错误。<br/>
2. New Render Return Type: 支持在render中返回数组或者字符串<br/>
3. Portals: 使组件可以放在除了根节点之外的地方，比如Modal<br/>
4. Better Server-side Rendering: 使用流的方式加快要渲染的html页面代码的读取速度等等<br/>
