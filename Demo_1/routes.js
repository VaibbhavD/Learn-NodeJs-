const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;
  const body = [];
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(`<body><P>${data}</P></body>`);
      console.log(data);
      res.write("<body>");
      res.write(
        `<form action="/message" method="POST"><input type='text' name='message'><button type="submit">Submit</button></form>`
      );
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parse = Buffer.concat(body).toString();
      const message = parse.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log(err);
        }
        console.log(fs.writeFile);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  // Handling GET requests
  else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Pages</title></head>");
    res.write("<body><h1>My First Pages</h1></body>");
    res.write("</html>");
    res.end();
  }
}
module.exports = requestHandler;
