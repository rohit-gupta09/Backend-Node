const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res) => 
{
    // console.log(req.url,req.method);

    //set header content type

    res.setHeader('Content-Type','text/html');

    // res.write('<h1>hello, ninjas</h1>');
    fs.readFile('./views/index.html',(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })
    
    // res.end();
});

server.listen(3000,'localhost',()=>{
    console.log('listening on port number 3000')
})