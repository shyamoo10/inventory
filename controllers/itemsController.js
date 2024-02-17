const asyncHandler = require("express-async-handler")
const categories = require("../models/categoryModel")
const items = require("../models/itemsModel")
const { all } = require("../categories")
const { signedCookie } = require("cookie-parser")


exports.create_get = asyncHandler(async (req, res, next) => {
    const alldataCategories = await categories.find({})

    res.render("item_create", { alldataCategories: alldataCategories, item: null })
})



exports.create_post = asyncHandler(async (req, res, next) => {
    const item = await items.findOne({ name: req.body.name })

    const singleCategory = await categories.findOne({ name: req.body.category })

    if (item) {

        return res.render("item_create", { item: item, alldataCategories: "" })
    }
    else {
        const newitem = new items({

            name: req.body.name,
            description: req.body.description,
            category: singleCategory._id,
            price: req.body.price,
            number_in_stocks: req.body.stocks
        })
        await newitem.save()
        return res.redirect("/categories")
    }

})


exports.delete_get = asyncHandler(async (req, res, next) => {
    const allitem= await items.findById(req.params.id)
  res.render("item_delete" ,{allitem:allitem})
})


exports.delete_post = asyncHandler(async (req, res, next) => {
  const itemCheck = await items.findById(req.params.id)
   if(itemCheck){
    await items.findByIdAndDelete(req.params.id)
    res.redirect("/categories")
   }
})


exports.items_details = asyncHandler(async (req, res, next) => {
    const item = await items.findById(req.params.id)
    if (item)
        return res.render("items_details", { item: item })
})
