# react-blog-rebuild

npm install react --save    
npm install webpack@^3.9.1 --save    
npm install react-dom --save   

安装babel    
npm install babel-loader@^7.1.2 --save-dev    
npm install babel-core@^6.26.0 --save-dev    

安装html-webpack-plugin，它可以在webpack打包的过程中将entry中的js文件加入到html中，并根据output中的配置定向输出    
npm install babel-preset-2015 babel-preset-2015-loose babel-preset-react --save-dev    

**开发福利 1**   
安装webpack dev server，webpack官方提供，将编译的文件提到内存当中，每次有文件变化就会自动编译，不需要手动执行       
npm install webpack-dev-server@^2.9.5 --save-dev    
npm install cross-env@^5.1.1 --save-dev    
执行npm run dev:client 就可以执行webpack-dev-server并动态编译了   

**开发福利 2**
安装hot module replacement，在页面上无刷新的更新效果       
npm install react-hot-loader@^3.1.3 --save-dev    