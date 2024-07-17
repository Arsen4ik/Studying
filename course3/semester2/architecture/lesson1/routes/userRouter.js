// const express = require('express')
// const userController = require('../controllers/userController.js')
// const userRouter = express.Router()

// homeRouter.get('/create', userController.addUser)
// homeRouter.get('/', userController.getUsers)

// module.exports = userRouter



// const express = require("express");
// const userController = require("../controllers/userController.js");
// const userRouter = express.Router();
// // userRouter.use("/create", userController.addUser);
// // userRouter.use("/", userController.getUsers);
// userRouter.use('postuser', userController.postUser)
// userRouter.use('create', userController.addUser)
// userRouter.use('/', userController.getUsers)
// module.exports = userRouter;

const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.use("/postuser", userController.postUser);
userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);

module.exports = userRouter;