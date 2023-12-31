// const http = require("http")
// http.createServer(function(request, response){
//     response.end("hi everyone")
// }).listen(3000, "127.0.0.1", function(){
//     console.log("сервер начался")
// })

// const getS = require("./getSinus")
// console.log(getS.gets(7))

// console.log(`время запроса: ${new Date()} ${new Date().getTime()}`)

// const os = require("os")
// let userName = os.userInfo().username

// function Good(user){
//     let hour = new Date().getHours()
//     if(hour > 16){
//         console.log(`добрый вечер: ${user}`)
//     } else if(hour > 10){
//         console.log(`добрый день: ${user}`)
//     } else {
//         console.log(`доброе утро: ${user}`)
//     }
// }
// Good(userName)

// const getS = require("./getSinus")

// const Name = require("./getName")
// console.log(`приветствую вас - ${Name.name1}`)
// console.log(`приветствую и вас - ${Name.name2}`)

// const Morning = require("./welcome/morning.js")
// Morning.hi()
// const Afternoon = require("./welcome/index.js")
// Afternoon.hi()
// const Evening = require("./welcome/evening.js")
// Evening.hi()

global.name = "Arsen"
console.log(global.name)