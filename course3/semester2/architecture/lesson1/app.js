// const express = require('express')
// const app = express()

// const userRouter = require('./routes/userRouter.js')
// const homeRouter = require('./routes/homeRouter.js')

// app.use('/users', userRouter)
// app.use('/', homeRouter)

// // const userController = require("./controllers/userController.js")
// // const homeController = require('./controllers/homeController.js')

// // const userRouter = express.Router()

// // const userRouter = express.Router()
// // const homeRouter = express.Router()

// // userRouter.use('/create', userController.addUser)
// // userRouter.use('/', userController.getUsers)
// // app.use('/users', userRouter)

// // homeRouter.use('/about', homeController.about)
// // homeRouter.use('/', homeController.index)
// // app.use('/', homeRouter)

// // userRouter.use('/create', (_, res) => {
// //     res.send('добавление пользователя')
// // })
// // userRouter.use('/', (_, res) => {
// //     res.send('список пользователей')
// // })

// // app.use('users', userRouter)

// // app.get('about', (_, res) => {
// //     res.send('о сайте')
// // })
// // app.get('/', (_, res) => {
// //     res.send('главная страница')
// // })
// app.use((req, res, next) => {
//     res.status(404).send('not found')
// })

// const PORT = 3001

// app.listen(PORT, () => {
//     console.log(`hello on http://localhost:${PORT}`)
// })


const express = require("express");
const app = express();

const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.set("view engine", 'hbs')
app.use(express.urlencoded({ extended: false }))

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
app.listen(3000, () => console.log("Сервер запущен и ожидает подключения..."));