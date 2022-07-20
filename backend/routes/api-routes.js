const mongoose=require('mongoose');
const express=require('express');
const axios= require('axios')
const router=express.Router();
const app=express();
app.use(express.json());
router.get('/articles', async(req,res)=>{

    const api_token="58ea16e34fdf71d015dfbd11a450c490"
    
    let url=`https://gnews.io/api/v4/top-headlines?token=${api_token}`;

    // let article;
    axios.get(url)
    .then((response)=>{
      console.log(response.data,"response")
      res.json(response.data);
    })
})
module.exports=router;