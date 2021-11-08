var http = require('http');
var fs = require('fs');
var os = require("os");
http.createServer(function (req, res) {
  console.log(req.url);
  //console.log(req);
  if(req.method === 'GET'){
    var url = '';
    var index = req.url.indexOf('?');
    var path;
    if(index != -1)
      path = req.url.substring(0,index);
    else
      path = req.url;
    console.log('path: ' + path);
    switch(path){
      case '/search':
          url = 'search.html';
          break;
      case '/getStudent':
          url = 'res/student.json';
          break;
      case '/info':
          url = 'info.html';
          break;
      case '/exit':
          process.exit();
          break;
      default:
          if(req.url.includes('.')){
            url = req.url;
            break;
          }
          url = 'redirect.html';
          break;
      }

      console.log(url);
      if(url){
        if(url.charAt(0) == '/'){
          url = url.substring(1);
        }
        fs.readFile(url, function(err, data) {
        
            console.log(err);
            if(err){
              res.writeHead(404, {'Content-Type': 'text/html'});
              res.write('<h1>404 NOT FOUND</h1>');
              return res.end();
            }else{
              if(url.endsWith('.html'))
                res.writeHead(200, {'Content-Type': 'text/html'});
              else if(url.endsWith('.js')){
                res.writeHead(200, {'Content-Type': 'text/javascript'});
              }else if(url.endsWith('.json')){
                res.writeHead(200, {'Content-Type': 'application/json'});
              }else{
                res.writeHead(200, {'Content-Type': 'text/plain'});
              }
              res.write(data);
              return res.end();
            }
        });
      }else{
        res.end();
      }
    }else{
      res.end();
    }


}).listen(8080);

