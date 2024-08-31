const express = require("express");
const UserController = require('../controllers/usercontroller')
const route = express.Router()




route.get('/',UserController.getAll);
route.get('/:id',UserController.getById)
route.post('/',UserController.add);
route.put('/:id',UserController.update);
route.delete('/:id',UserController.del);

module.exports = route
