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
