const http=require('http');
const fs=require('fs');
const _=require('lodash');



const server=http.createServer((req,res)=>{

    const num=_.random(0,20);
    console.log(num)

    const great=_.once(()=>{  // once allow the function to be run only one time
        console.log("Hello")
    })

    great();
    great()
    res.setHeader('Content-Type','text/html');
    let path='./views/';

    switch(req.url)
    {
        case '/':
            path += 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode=200;
            break;
        default:
            path += '404.html';
            res.statusCode=404;
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            
            res.end(data)
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log('listening on port number 3000')
})