const mongoose=require('mongoose');
const express=require('express');
const axios= require('axios')
const router=express.Router();

router.get('/articles', async(req,res)=>{

    const api_token="58ea16e34fdf71d015dfbd11a450c490"
    
    let url=`https://gnews.io/api/v4/token=api_token`;

    let article;
    axios.get(url)
    .then((res)=>{
      console.log(res.data,"response")
    //   return article=res.data
    })
})
module.exports=router;