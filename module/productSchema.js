const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost/DB711")
.then(()=>{
    console.log("sucessfully conncted to product DB")
})
.catch((err)=>{
    console.log(err)
})
const schema =mongoose.Schema
const productSchema=new schema({
    Product_id:{type:String},
    Product_type:{type:String},
    Product_name:{type:String},
    Product_price:{type:Number},
    Available_quantity:{type:Number}
})

const Product = mongoose.model("product",productSchema)

module.exports=Product