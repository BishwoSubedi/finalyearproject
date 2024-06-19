import express from 'express';
import authRoutes from './routes/auth.route.js'
const app= express();

const PORT= 8000;


app.use(express.json())
app.use("/auth",authRoutes)


 app.listen(PORT,()=>{
        console.log(`Server running at port ${PORT}`)
 })