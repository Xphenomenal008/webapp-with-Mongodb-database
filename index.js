const express=require('express')
const mongoose=require('mongoose')
const methodOverride = require('method-override')
const app=express()
app.use(methodOverride('_method'));
const path=require('path')
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
const chat=require('./model/chat')

//ist make connection with our local database!!
const main=async()=>{
  await mongoose.connect('mongodb://127.0.0.1:27017/myapp')
}
main().then(()=>{
console.log("connected sucessfully")
})

// chat.insertOne({
//     from:'ashutosh',
//     to:'arushi',
//     msg:'hello world',
//     created_at:new Date().toString()
// })
app.get('/',async(req,res)=>{
   const data=await chat.find()
    res.render("home.ejs",{data})
})


app.get('/newchat',(req,res)=>{
    res.render("newchat.ejs")
})


app.post('/submitchat',async(req,res)=>{
const {to,from,msg}=req.body
await chat.insertOne({
    to:to,
    from:from,
    msg:msg,
    created_at:new Date()
})
res.redirect("/")

})

app.get("/edit/:id",async(req,res)=>{
    const {id}=req.params
    const founded=await chat.findById(id)
    res.render("editfrom.ejs",{data:founded})

})

app.patch("/edited/:id",async(req,res)=>{
    const {id}=req.params
    await chat.findByIdAndUpdate(id,{msg:req.body.msg,updated_at:new Date()})
    res.redirect("/")

})
app.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    await chat.findByIdAndDelete(id)
    res.redirect("/")
})

app.listen('5000',()=>{
    console.log('listen to 5000')
})
