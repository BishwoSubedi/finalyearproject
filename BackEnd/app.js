import express from 'express';

const app= express();

const PORT= 8000;


app.get("/api",(req,res)=>{
    res.send("Hello world")
})


 app.listen(PORT,()=>{
        console.log(`Server running at port ${PORT}`)
 })