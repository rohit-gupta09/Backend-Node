const express=require('express');

const app=express();

// app.get('/',function(req,res){
//     res.send("hello world")
// })

// app.get('/about',(req,res)=>{
//     res.sendFile('<h1>About page</h1>')
// })


app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname})
})

app.get('/main',(req,res)=>{
    res.sendFile('./views/main.html',{root:__dirname})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

app.use((req,res)=>{
    res.sendFile('./views/404.html',{root:__dirname})
})

app.listen(3000)