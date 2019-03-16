function startServer() {
var express = require('express');
var app = express();
var http = require('http');
var router = require('./router')
var server = http.createServer(app);
app.use(function(req,res,next){
var cluster = require('cluster');
if(cluster.isWorker) console.log('Worker %d received request',
cluster.worker.id);
next();
});

router(app);
app.set('port', 3000);

server.listen(app.get('port'), function(){
console.log( 'Express started in ' + app.get('env') +
' mode on http://localhost:' + app.get('port') +
'; press Ctrl-C to terminate.' );
});
}
if(require.main === module){
// 应用程序直接运行；启动应用服务器
startServer();
} else {
// 应用程序作为一个模块通过 "require" 引入 : 导出函数
// 创建服务器
module.exports = startServer;
}