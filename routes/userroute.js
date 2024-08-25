const express = require("express");

const UserController = require('../controllers/usercontroller')
const route = express.Router()

const users = [
    {
        id:1,
        name:"dds",
        age:11
    },
    {
        id:2,
        name:"ggg",
        age:12
    },
    {
        id:3,
        name:"qqq",
        age:13
    },
    {
        id:4,
        name:"fff",
        age:14
    },
    {
        id:5,
        name:"zzz",
        age:15
    },
    {
        id:6,
        name:"sss",
        age:16
    },
    {
        id:7,
        name:"abc",
        age:17
    }
]


route.get('/',UserController.Get);
route.post('/',UserController.Post);

route.get('/:id',(request,response)=>{

    let id = request.params.id
    let obj = users.find(x=>x.id == id)
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
