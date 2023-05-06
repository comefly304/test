const router=require('express').Router()
const TodoModel=require('../models/item')



//post item
router.post("/api/item",async(req,res)=>{
    try{
  const {item}=req.body
  const newitem=new TodoModel({
    item
  })
  await newitem.save()
  return res.json(newitem)
    }catch(err){
        return res.send(err)
    }
})

//get
router.get("/api/items",async(req,res)=>{
    try{
const getitem=await TodoModel.find()
return res.json(getitem)
    }catch(err){
        return res.send(err)
    }
})

//update
router.put("/api/item/:id",async(req,res)=>{
   try{
const updateitem=await TodoModel.findByIdAndUpdate(req.params.id,{
    $set:req.body
},{new:true})
return res.send(updateitem)
   }catch(err){
    return res.send(err)
   }
})


//delete
router.delete("/api/item/:id",async(req,res)=>{
    await TodoModel.findByIdAndDelete(req.body.id)
    return res.send("item deleted")
})



module.exports=router