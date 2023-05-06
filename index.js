const express=require('express')
require('dotenv').config()
const Connection=require("./config/db")
const router=require('./routes/item')
const app=express()
const cors=require('cors')

app.use(express.json())
app.use(cors())
app.use("/",router)


const PORT=5600
app.listen(PORT,()=>{
    Connection()
    console.log(`server running in port ${PORT}`)
})
