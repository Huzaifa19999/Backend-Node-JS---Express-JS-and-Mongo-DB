const express = require("express");
const route = express.Router();

const products = [
    {
        id:1,
        product:"frfrfr"
    },
    {
        id:2,
        product:"ffref"
    },
    {
        id:3,
        product:"3e32e3"
    }
]

route.get('/',(req,res)=>{
    res.send({
        isSuccessful:true,
        data:[products]
    });
});

route.get('/:id',(request,response)=>{

    let id = request.params.id
    let obj = products.find(x=>x.id == id)
    if (!obj) {
        response.send({
            isSuccessfull:false,
            data:null,
            message:"No Data found"
        });
    } else {
        response.send({
            isSuccessfull:true,
            data: obj,
            message: "Data found",
        })
    }
})

module.exports = route