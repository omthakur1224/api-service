const express=require("express");
const connect = require("./configs/sever.js");
const cors= require("cors")
const app=express();
app.use(cors())
app.use(express.json());

app.use('/',require('./routes/api-routes'))


const PORT=8080;
app.listen(PORT, async (req,res)=>{
     await connect();
          
    console.log(`server is running on ${PORT}`)
})