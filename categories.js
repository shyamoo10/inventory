const express=require('express')
const router=express.Router()
const categoriesController=require("./controllers/categoriesController")
const itemsController=require("./controllers/itemsController")
router.get("/",categoriesController.homepage)
 
 router.get("/create",categoriesController.create_get)
router.post("/create",categoriesController.create_post)
router.get("/delete",categoriesController.delete_get)
router.post("/delete",categoriesController.delete_post)
router.get("/:id",categoriesController.items_list)

router.get("/items/create")
router.post("/items/create")
router.get("/items/delete")
router.post("/items/delete")
router.get("/items/:id",itemsController.items_details)
module.exports=router