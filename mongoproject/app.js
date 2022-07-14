const express=require('express');
const app=express();

const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/rohitgupta");

//schema=> a mongoose schema defines the structure of the document

const PlaylistSchema=new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlist=new mongoose.model("Playlist",PlaylistSchema);

// create document or insert

const createDocument=async ()=>{

    const reactPlaylist=new Playlist({
        name:"React JS",
        ctype:"Frontend",
        videos:80,
        active:true,
    });
    
    const result=await reactPlaylist.save();
    // console.log(result);
}

createDocument();

const getDocument=async ()=>{
    const result=await Playlist.find();
    console.log(result);
}

getDocument();

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.listen(3000);