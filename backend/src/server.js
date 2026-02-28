import express from "express"
import "dotenv/config"
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";


connectDB()
const app = express();
const PORT = process.env.PORT;

// all routes
app.use("/api/auth",authRoutes);

app.get('/',(req,res)=>{
    res.send("api working!")
})

app.listen(PORT,()=> {
    console.log(`Server is runing on port ${PORT}`);
})