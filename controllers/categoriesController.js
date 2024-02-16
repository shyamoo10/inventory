const asyncHandler=require("express-async-handler")
exports.homepage=asyncHandler(async(req,res,next)=>{
     res.send("homepage")
})