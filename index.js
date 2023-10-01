const express=require('express');
const Port =2000;
const app= express();

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
res.render('index');
})


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

