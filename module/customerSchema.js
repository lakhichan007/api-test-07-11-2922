const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost/DB711")
.then(()=>{
    console.log("sucessfully conncted to customer DB")
})
.catch((err)=>{
    console.log(err)
})
const schema =mongoose.Schema
const customerSchema=new schema({
    customer_id:{type:String},
    customer_name:{type:String},
    email:{type:String,unique:true},
    balance:{type:Number}

})
const Customer = mongoose.model("customer",customerSchema)
module.exports=Customer