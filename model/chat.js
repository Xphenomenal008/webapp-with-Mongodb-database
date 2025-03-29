const mongoose=require('mongoose')

//after making connection we make schema
const schema=new mongoose.Schema({
from:{
    type:String,
    
},
to:{
    type:String,

},
msg:{
    type:String,
    
},
created_at:{
type:Date,

},
updated_at:{
    type:Date,
},
owner:{ //this is how which each list we attch his user
    type:mongoose.Schema.Types.ObjectId,
    ref:"User" //where all the user has been stored ---ensure your name is same as your collection
},
})

//then we will make collection or model in which we going to insert documents
const Chat=mongoose.model('chat',schema);
module.exports=Chat