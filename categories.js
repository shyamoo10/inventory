const express=require('express')
const router=express.Router()
const categoriesController=require("./controllers/categoriesController")
router.get("/",categoriesController.homepage)
module.exports=router