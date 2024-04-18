const http = require("http");
const url = require("url");

const PORT = 5004;

const server = http.createServer((req, res) => {

  const urlPath = url.parse(req.url);

  if(urlPath.pathname === "/health") {
    
    res.writeHead(200);
    return res.end();
  }

  setTimeout(() => {})

  res.write("hello from server 4");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
