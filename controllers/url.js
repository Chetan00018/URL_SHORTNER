import { Url } from "../models/Url.js"
import shortid from "shortid";

export const shortUrl=async (req,res)=>{
const longUrl=req.body.longUrl;
const shortCode=shortid.generate();
const shortUrl=`http://localhost:3000/${shortCode}`
const newUrl=new Url({shortCode,longUrl})
await newUrl.save();

console.log("shorturl",newUrl)
res.render('index.ejs',{shortUrl})


}

export const getOriginalUrl=async(req,res)=>{

  const shortCode=req.params.shortcode
  const originalUrl=await Url.findOne({shortCode})
  if(originalUrl){
    res.redirect(originalUrl.longUrl)
  }
  else{
  res.json({
    message:"invalid shortcode"
  })
}
}