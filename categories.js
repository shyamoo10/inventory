const express=require('express')
const router=express.Router()
const categoriesController=require("./controllers/categoriesController")
const itemsController=require("./controllers/itemsController")
router.get("/",categoriesController.homepage)
 
 router.get("/create",categoriesController.create_get)
router.post("/create",categoriesController.create_post)
router.get("/delete/:id",categoriesController.delete_get)
router.post("/delete/:id",categoriesController.delete_post)
router.get("/:id",categoriesController.items_list)

router.get("/items/create",itemsController.create_get)
router.post("/items/create",itemsController.create_post)
router.get("/items/delete/:id",itemsController.delete_get)
router.post("/items/delete/:id",itemsController.delete_post)
router.get("/items/:id",itemsController.items_details)
module.exports=router