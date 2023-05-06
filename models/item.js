const mongoose=require('mongoose')

const itemschema=new mongoose.Schema({
    item:{type:String}
},{
    timestamps:true
})

const TodoModel=mongoose.model("production",itemschema)

module.exports=TodoModel