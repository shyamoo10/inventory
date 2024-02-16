const express=require('express')
const router=express.Router()
const categoriesController=require("./controllers/categoriesController")
router.get("/",categoriesController.homepage)
 
 router.get("/create",categoriesController.create_get)
router.post("/create",categoriesController.create_post)
router.get("/delete",categoriesController.delete_get)
router.post("/delete",categoriesController.delete_post)
router.get("/:id",categoriesController.items_list)
module.exports=router