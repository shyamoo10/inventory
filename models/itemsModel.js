const mongoose=require('mongoose')
const itemsSchema=mongoose.Schema({
    name:String,
    description:String,
    category:{type:mongoose.Types.ObjectId, ref:"categories"},
    price:Number,
    number_in_stocks:Number
})
 itemsSchema.virtual("url").get(function(){
   return "/categories/items/"+this._id
 })
  const items=mongoose.model("items",itemsSchema)
  module.exports=items