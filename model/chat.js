const mongoose=require('mongoose')

//after making connection we make schema
const schema=new mongoose.Schema({
from:{
    type:String,
    required:true
},
to:{
    type:String,
    required:true
},
msg:{
    type:String,
    
},
created_at:{
type:Date,
requirred:true
},
updated_at:{
    type:Date,

}
})

//then we will make collection or model in which we going to insert documents
const Chat=mongoose.model('chat',schema);
module.exports=Chat