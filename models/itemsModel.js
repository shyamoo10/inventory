const mongoose=require('mongoose')
const Schema=mongoose.Schema()
const itemsSchema=new Schema({
    name:String,
    description:String,
    category:{type:Schema.Types.ObjectId, ref:"categories"},
    price:Number,
    number_in_stocks:Number
})
 itemsSchema.virtual("url").get(function(){
   return "/categories/items/"+this._id
 })
  const items=mongoose.model("items",itemsSchema)
  module.exports=items