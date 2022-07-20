const express=require("express");
const connect = require("./configs/sever.js");
const cors= require("cors")
const app=express();
app.use(cors())
app.use(express.json());

app.use('/',require('./routes/api-routes'))
// app.use('/todos',require('./routes/todoRoutes'))

const PORT=8080;
app.listen(PORT, async (req,res)=>{
     await connect();
             // .then((res)=>console.log("connection with mongo success")/)
    console.log(`server is running on ${PORT}`)
})