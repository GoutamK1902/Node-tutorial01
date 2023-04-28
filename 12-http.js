const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Homepage");
  }
  if (req.url === "/about") {
    res.end("About Page");
  }
  res.end(`<h1>Oops!</h1>
      <p>can't find the page you are looking for</p>
      <a href="/">back home</a>`);
});

server.listen(5000);
