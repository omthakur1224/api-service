
const mongoose = require("mongoose");

const MONGOURL="mongodb+srv://omthakur1224:om_521@cluster0.4hv5a.mongodb.net/?retryWrites=true&w=majority"

const connect=()=>{
    try{
        mongoose.connect(MONGOURL,{useNewUrlParser:true,useUnifiedTopology: true})
        // .then((res)=>{console.log("you are connected with mongo")})
        console.log(`you are connected with server`);
    }
    catch(err){
        console.log(`error with mongo connetion`);
    }
}
module.exports=connect;