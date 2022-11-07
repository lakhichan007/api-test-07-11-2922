const express= require("express")
const cors= require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const Customer=require("../module/customerSchema")
const Product=require("../module/productSchema")
const Order=require("../module/orderSchema")
const port =process.env.PORT || 3000

//post product
app.post("/product",async(req,res)=>{
    try{

        if(req.body.Product_id && req.body.Product_type && req.body.Product_name &&
            req.body.Product_price && req.body.Available_quantity){
    
               const data= await Product.create(req.body)
                res.json({
                    status:"sucessfull",
                    data
                
                })
            }
    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
    
})

//post order
app.post("/orders", async(req ,res)=>{
    try{
        if(req.body.customer_id && req.body.Product_id &&
            req.body.Product_name && req.body.quantity){

               const data= await Order.create(req.body)
                res.json({
                    status:"Sucessfull",
                    data
                })
            }
    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
})

// post customer
app.post("/customer",async(req,res)=>{
    try{
        if(req.body.customer_id && req.body.customer_name &&
            req.body.email && req.body.balance){
               const data= await Customer.create(req.body)
                res.json({
                    status:"Sucessfull",
                    data
                })
        }

    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
})

// get product by order id
app.get("/product/:id",async(req,res)=>{
    try{
        const data= await Product.find({customer_id:req.params.id})

        if(Product.Available_quantity===0){
            res.json({
                message:"OUT OF STOCK !"
            })
        }
        else{
            res.json({
                status:"sucessfull",
                data
            })
        }
        res.json({
            status:"sucessfull",
            data
        })
    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
})

// get product by product id
app.get("/product/:id",async(req,res)=>{
    try{
        const data= await Product.find({Product_id:req.params.id})
        res.json({
            status:"sucessfull",
            data
        })
    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
})

//get customer by customer id
app.get("/customer/:id",async(req,res)=>{
    try{
        const data= await Customer.find({customer_id:req.params.id})
        res.json({
            status:"sucessfull",
            data
        })
    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
})

//get product by product type
app.get("/customer",async(req,res)=>{
    try{
        const data= await Product.find({Product_type:req.query.value})
        res.json({
            status:"sucessfull",
            data
        })
    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
})

//update the available quantity
app.put("/product",async(req,res)=>{

    try{

        const data= await Product.updateMany({Product_name:req.query.value},req.body)
        res.json({
            status:"sucessfull",
            data
        })
    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
})

//updating customer balance
app.put("/customer/:email",async(req,res)=>{

    try{

        const data= await Customer.updateOne({email:req.params.email},req.body)
        res.json({
            status:"sucessfull",
            data
        })
    }
    catch(e){
        res.json({
            status:"failure",
            message:e.message
        })
    }
})
//check for item
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})