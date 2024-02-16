const mongoose=require('mongoose')

 const categoryShema=mongoose.Schema({
    name:String,
    description:String
 })

 categoryShema.virtual("url").get(function(){
    return "/categories/" +this._id
 })
   const categories=mongoose.model("categories",categoryShema)
   module.exports=categories