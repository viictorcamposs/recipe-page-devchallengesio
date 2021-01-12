const nunjucks = require('nunjucks');
const express = require('express');

const server = express();

server.set('view engine', 'html')
.use(express.static('public'));

nunjucks.configure('views', {
  express:server
});

server.get('/', (req, res) => {
  return res.render('index');
});

server.listen(5000, () => {

  console.log('Server is running...');
});