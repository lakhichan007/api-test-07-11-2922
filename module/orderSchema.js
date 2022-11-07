const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost/DB711")
.then(()=>{
    console.log("sucessfully conncted to order DB")
})
.catch((err)=>{
    console.log(err)
})
const schema =mongoose.Schema
const orderSchema=new schema({
    customer_id:{type:String},
    Product_id:{type:String},
    Product_name:{type:String},
    quantity:{type:Number}
})

const Order = mongoose.model("order",orderSchema)
module.exports=Order