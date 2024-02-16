const asyncHandler=require("express-async-handler")
const categories=require("../models/categoryModel")
const items=require("../models/itemsModel")
const { all } = require("../categories")

exports.items_details= asyncHandler(async(req,res,next)=>{
    const item= await items.findById(req.params.id)
    if(item)
     return res.render("items_details",{item:item})
})