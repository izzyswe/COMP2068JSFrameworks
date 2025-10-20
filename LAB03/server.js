const connect = require("connect");
const http = require("http");
const url = require("url");
const app = connect();

const port = 3001;

function createCalculator(operation) {
  return (x, y) => {
    switch (operation) {
      case "add":
        return x + y;
      case "subtract":
        return x - y;
      case "multiply":
        return x * y;
      case "divide":
        return y !== 0 ? x / y : "Error: Division by zero";
      default:
        return "Error: Invalid method";
    }
  };
}

app.use((req,res) => {
  if(req.url === "/"){
    res.writeHead(200, { "content-type":"text/plain" })
    res.end("welcome to homepage! \ntype eg; 'Lab03?method=add&x=16&y=4' to get a calculation \noperations are: add, multiply, divide, subtract")
  }
})

//create node.js http server and listen on port
http.createServer(app).listen(port, () => {
  console.log("Server running at localhost:3000//lab2?method=add&x=16&y=4");
});
