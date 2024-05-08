const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/Home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> My First Page </title></head>");
    res.write("<body><h1> Welcom Home</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/About") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> My First Page </title></head>");
    res.write("<body><h1> Welcom About US</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/Node") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> My First Page </title></head>");
    res.write("<body><h1> Welcom to My NodeJS Project</h1></body>");
    res.write("</html>");
    return res.end();
  }
});
server.listen(3000);
