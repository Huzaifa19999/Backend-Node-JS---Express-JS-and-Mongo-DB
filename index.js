require('dotenv').config();
const express = require("express");
const App = express()
const userrouter = require("./routes/userroute")
const authrouter = require("./routes/authroute")
const mongoose = require("mongoose")
const cors = require('cors');
// const productrouter = require("./routes/productroute")


App.use(cors())
App.use(express.json())
App.use("/users",userrouter)
App.use("/auth",authrouter)
// App.use("/products",productrouter)


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        App.listen(process.env.PORT || 5001, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("DB is connected && Server is running on port 5000")
            }
        });
    }).
    catch((err)=>{
        console.log(err,"DB connection failed")
    });





// mongodb+srv://BackenedClass:pakistan123456@cluster0.naslh.mongodb.net/