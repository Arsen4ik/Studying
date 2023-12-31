const express = require('express')

const app = express()

// const urlencodedParser = express.urlencoded({extended: false})

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// })
// app.post('/', urlencodedParser, (req,res)=>{
//     if(!req.body) return res.status(404)
//     console.log(req.body)
//     res.send(`${req.body.userName} - ${req.body.userAge}`)
// })


// const aboutRouter = express.Router()

// aboutRouter.use('/', (req, res)=>{
//     res.send('about!')
// })
// aboutRouter.use('/what', (req, res)=>{
//     res.send('about what?')
// }) 

// app.use('/about', aboutRouter)


const jsonParser = express.json()
app.post("/user", jsonParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400)
    console.log(req.body)
    res.json(req.body)
})
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000)

// app.get("/about/:who/:what", (req,res)=>{
//     let who = req.params["who"]
//     let what = req.params["what"]
//     res.send(`person: ${who}, need: ${what}`)
// })

// app.use(express.static(__dirname + '/public'))


// app.get('/.?start!+y*s(.css)?', (req, res) => {
//     res.send('<h1 style="color: red;">Arsen</h1>')
// })
// app.use('/arsen', (req, res) => {
//     res.redirect('https://learn.javascript.ru/object-for-in')
// })
// app.use('/index', (req,res) => {
    // res.sendFile(__dirname + '/index.html')
    // let color = req.query.color
    // let size = req.query.size
    // res.send(`our color: ${color}; our size: ${size}`)
    // let array = req.query.arr
    // console.log(array)
    // let result = "<ol>"
    // for(let i of array){
    //     result += "<li>" + array[i] + "</li>"
    // }
    // result += "</ol>"
    // res.send(result)
//     let color = req.query.obj.color
//     let size = req.query.obj.size
//     console.log(color, size)
//     res.send(`our object color: ${color}; our object size: ${size}`)
// })
// app.use('/public/about', (req,res) => {
//     res.redirect("..")
// })
// app.use('/news', (req, res, next) => {
//     console.log('middleware 2')
//     res.send('<h1 style="color: green;">у березы листья 100% зеленые</h1>')
//     // next()
// })
// app.get('/', (req, res) => {
//     // res.send(Buffer.from('hi'))
//     // console.log(Buffer.from('hi'))
//     // res.sendFile(__dirname + '/index.html')
//     // res.status(200).send('yes')
// })


