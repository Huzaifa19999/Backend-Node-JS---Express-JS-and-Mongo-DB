const express = require("express");
const App = express()
App.use(express.json())
const userrouter = require("./routes/userroute")
const productrouter = require("./routes/productroute")
const mongoose = require("mongoose")


// App.get('/users',(request,response)=>{
//     response.send("Server started and hitted / request")
// })

App.use("/users",userrouter)
App.use("/products",productrouter)


mongoose.connect('mongodb+srv://huzaifa:pakistan12345@cluster0.naslh.mongodb.net/')
    .then((res)=>{
        App.listen(5000,()=>{
            console.log("DB is connected && Server is running on port 5000")
        })
    }).
    catch((err)=>{
        console.log(err,"DB connection failed")
    })





// mongodb+srv://BackenedClass:pakistan123456@cluster0.naslh.mongodb.net/