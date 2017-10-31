const express = require('express');
const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.dev');
const compiler = webpack(webpackConfig);

const opn = require('opn');

const chalk = require('chalk');

const app = express();

// 这个玩意可以直接给个随机数

// 80 端口是 http 协议的专用端口, 专用端口！
const port = parseInt(Math.random() * 10000) + 5000;
// const  port = '80';
// 设置 webpackDevMiddleware
const devMiddleware = webpackDevMiddleware(compiler, {
	publicPath: '/',
    // 这个字段为 true 会删掉每次 hot reload 的时候输出到 cmd 里面的打包信息
    quiet: true
});

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: () => {}
})

/*
当 vue-router 开启 histroy 的时候, 就需要这个插件
: 这个玩意的顺序必须要在这里, 不能在 devMiddleware, hotMiddleware 后面
// handle fallback for HTML5 history API
*/

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware);

// hot-reload
app.use(hotMiddleware);

// 挂载到虚拟路径上面
app.use('/static', express.static('./static'));


// 获取 ip
function getIPAdress(){  
    var interfaces = require('os').networkInterfaces();  
    for(var devName in interfaces){  
          var iface = interfaces[devName];  
          for(var i=0;i<iface.length;i++){  
               var alias = iface[i];  
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                     return alias.address;  
               }  
          }  
    }  
} 

var ip = getIPAdress();


// 监听路径
app.listen(port, function(){
	console.log(chalk.green.bold('> Listening on port: http://'+ ip + ':' + port +'/'));
	console.log();
});

// 打包成功之后会触发这个玩意
devMiddleware.waitUntilValid(function(err){
	// 打开浏览器
	opn('http://' + ip + ':' + port)
});