import express from 'express'
import mongoose  from 'mongoose';
import { shortUrl,getOriginalUrl } from './controllers/url.js';
const app=express();
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://chetangore:chetan%40123@cluster0.qmlrhuq.mongodb.net/",{
  dbname:"nodejs"
}).then(()=>console.log("mongodb connected")).catch((err)=>console.log(err))


app.get('/',(req,res)=>{
  res.render('index.ejs',{shortUrl:null})
})

app.post("/short", shortUrl )

//redirect to original url
app.get("/:shortcode",getOriginalUrl)

const port=3000;
app.listen(port,()=>{
  console.log(`server is running on port${port}`)
})