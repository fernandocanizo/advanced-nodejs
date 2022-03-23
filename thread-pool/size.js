// UV_THREADPOOL_SIZE is a libuv controlling environment variable
// its default value is 4
// by testing with Apache Benchmark command (`ab`), you can see how request
// per second diminishes if you set thread pool size to 1
// However you don't get, for this particular code, a big improvement over
// 4
process.env.UV_THREADPOOL_SIZE = 1024;

const http = require('http');
const bcrypt = require('bcrypt');

http.createServer((req, res) => {
  bcrypt.hash('test string', 2)
    .then(hash => {
      res.writeHead(200, { 'Content-Type': 'text/plain'});
      res.write(hash);
      res.end();
    });
})
  .listen(3000);
