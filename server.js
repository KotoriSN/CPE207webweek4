const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req,res) => {
  console.log(req.url);
  if(req.url === '/') {
    // res.writeHead(200, { 'Content-Type': 'text/html'});
    // res.end('<h1>This is index.html</h1>');

    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });

  } else if (req.url === '/gallery') {
    // res.writeHead(200, { 'Content-Type': 'text/html'});
    // res.end('<h1>This is ABOUT PAGE</h1>');

    fs.readFile(path.join(__dirname, 'public', 'gallery.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });

  } else if (req.url === '/contact') {
        // res.writeHead(200, { 'Content-Type': 'text/html'});
        // res.end('<h1>This is ABOUT PAGE</h1>');
    
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err,content) => {
          if(err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html'});
          res.end(content);
        });
/*
  } else if (req.url === '/css/style.css') {
    fs.readFile(path.join(__dirname, 'public', 'css', 'style.css'), (err,content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.end(content);
    });
  } else if (req.url === '/api/users') {
    const users = [
      { name: 'John Doe', age: 35 },
      { name: 'Narathip Tiangtae', age: 25},
      { name: 'Dome Potikanond', age: 30}
    ];

    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
  */
  } else {
    // res.writeHead(404, { 'content-type': 'text/html'});
    // res.end('<h3>Eror 404: Not Found</h3>');
    fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) => {
      if(err) throw err;
      res.writeHead(404, { 'Content-Type': 'text/html'});
      res.end(content);
    });
  }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log('Server is running on port: '+PORT);
});