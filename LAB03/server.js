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

// respond to all requests

app.use(function(req, res){
 const query = url.parse(req.url, true).query;
 //grab and assigned the URL query parameter method to get "?method=blank"
 const method = query.method;
 // also grab assigned the URL query parameter method and parse or translate to a float value
 const x = parseFloat(query.x);
 const y = parseFloat(query.y);

 //using closure, the outer function will use the method url parameter as the argument
 const calculator = createCalculator(method);

 //if the user just goes to localhost:3001, it will output the following
 if(req.url === "/"){
  res.writeHead(200, { "content-type":"text/plain" })
  res.end("welcome to homepage! \ntype eg; 'Lab03?method=add&x=16&y=4' to get a calculation \noperations are: add, multiply, divide, subtract")
  // using relative search, because doing " === lab03 will find the absolutel like content of /lab03 and thats it, 
  // and == i think try to find the value if its similar but if theres more, its struggles
  // so as long as it STARTS WITH this string value, no problem!
 } else if(req.url.startsWith("/Lab03")){
  //If its not a number, tell them not valid
  if (isNaN(x) || isNaN(y)){
   res.writeHead(404, { "content-type":"text/plain" })
   res.end("NOT VALID!")
   //otherwise the display the user
  }else{
   res.writeHead(200, { "content-type":"text/plain" })
   //now the inner function will grab 2 float value from the query paramater as the argument
   const result = calculator(x, y);
   //and we will output in the text, a mathetical expression visually
   res.end(x + " " + method + " " + y + " = " + result);
  }
 }
});

//create node.js http server and listen on port
http.createServer(app).listen(port, () => {
  console.log("Server running at localhost:3000//lab2?method=add&x=16&y=4");
});
