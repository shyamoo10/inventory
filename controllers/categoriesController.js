const asyncHandler=require("express-async-handler")
const categories=require("../models/categoryModel")
const items=require("../models/itemsModel")
const db=require("../connection")
const { all } = require("../categories")

//below is the homepage of the website //

exports.homepage=asyncHandler(async(req,res,next)=>{
     const allcategories= await categories.find()
    
     if(allcategories) 
   return   res.render("homepage",{title:"categories",allcategories:allcategories})
   res.status(404,"error")
     
})


 exports.create_get=asyncHandler(async(req,res,next)=>{

 })

 exports.create_post=asyncHandler(async(req,res,next)=>{
    
 })

 exports.delete_get=asyncHandler(async(req,res,next)=>{
    
 })

 exports.delete_post=asyncHandler(async(req,res,next)=>{
    
 })
   
 exports.items_list=asyncHandler(async(req,res,next)=>{
    const allcategories=await categories.findById(req.params.id)
    const allitems= await items.find({category:req.params.id})
    if(allitems) 
     return res.render("category_details",{title:allcategories.name,allitems:allitems})
 })