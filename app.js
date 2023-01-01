const http=require("http");
http.createServer((request,response) =>{

    response.end("hello node");
})
.listen(4002)
const fs= require("fs")
let data =fs.readFileSync("./welcome.txt")
console.log(data.toString())

