const http = require("http")

const myServer = http.createServer((req,res)=>{
   res.end("Hello I am alive",new Date().getMilliseconds())
});


myServer.listen(8000,()=>{
    console.log("Started")
})

