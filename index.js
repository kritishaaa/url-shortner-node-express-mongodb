const express=require('express');
const mongoose = require('mongoose');
const shortUrl= require('./model/shortUrl');
const Port =2000;
const app= express();

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/urlShortner',{
    useNewUrlParser:true, useUnifiedTopology:true
})

app.get('/', (req,res)=>{
res.render('index');
})

app.post('/shortUrls',(req,res) =>{
    shortUrl
});


const startServer=()=>{
        try {
        app.listen(Port,()=>{
            console.log(`Server is running on port ${Port}`)
        })    
    } catch (error) {
        console.log(error);
        
    }
}

startServer();

