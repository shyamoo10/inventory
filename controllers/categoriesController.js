const asyncHandler=require("express-async-handler")
const categories=require("../models/categoryModel")
const items=require("../models/itemsModel")
const db=require("../connection")
const { all } = require("../categories")

const { name } = require("ejs")

//below is the homepage of the website //

exports.homepage=asyncHandler(async(req,res,next)=>{
     const allcategories= await categories.find()
    
     if(allcategories) 
   return   res.render("homepage",{title:"categories",allcategories:allcategories})
   res.status(404,"error")
     
})


 exports.create_get=asyncHandler(async(req,res,next)=>{
   res.render("category_create",{category: null})
 })

 exports.create_post=asyncHandler(async(req,res,next)=>{
     const existingCategory= await categories.findOne({name:req.body.category})
     if(existingCategory){
       res.render("category_create",{category:existingCategory})
     }
      else{
         const newcategory= new categories({
             name:req.body.category,
             description:req.body.description
         })
          await newcategory.save()
           res.redirect("/categories")
      }
 })

 exports.delete_get=asyncHandler(async(req,res,next)=>{
    const allcategory=await categories.findById(req.params.id)
    const allitems= await items.find({category:req.params.id})
    if(allitems){
      res.render("category_delete",{allitems:allitems, allcategory:allcategory})
    }
     
 })

 exports.delete_post=asyncHandler(async(req,res,next)=>{
    const singleCategory= await categories.findById(req.body.category_id)
    if(singleCategory){
       await categories.findByIdAndDelete(req.body.category_id)
        res.redirect("/categories")
    }
     else{
      res.status(Error)
     }
 })
   
 exports.items_list=asyncHandler(async(req,res,next)=>{
    const allcategories=await categories.findById(req.params.id)
    const allitems= await items.find({category:req.params.id})
    if(allitems) 
     return res.render("category_details",{allcategories:allcategories,allitems:allitems})
 })