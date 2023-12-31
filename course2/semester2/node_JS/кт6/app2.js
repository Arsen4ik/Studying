// const Emitter = require('events')
// let emitter = new Emitter() 
// let eventName = 'greet'

// // emitter.on(eventName, function(){
// //     console.log('hi from here!')
// // })
// // emitter.on(eventName, function(){
// //     console.log('hi from there?')
// // })
// emitter.on(eventName, function(data){
//     console.log(data)
// })
// emitter.emit(eventName, 'yeah!')

// const util = require('util')
// const EventMitter = require('events')

// function User(){}
// util.inherits(User, EventMitter)

// let eventName = 'greet'
// User.prototype.sayHi = function(data){
//     this.emit(eventName, data)
// }
// let user = new User()
// user.on(eventName, function(data){
//     console.log(data)
// })
// user.sayHi('wait whatt?')

// const EventMitter2 = require('events')

// class User2 extends EventMitter2 {
//     sayHi(data){
//         this.emit(eventName, data)
//     }
// }
// let user2 = new User2()
// user2.on(eventName, function(data){
//     console.log(data)
// })
// user2.sayHi('wait whatt? - 2 what!')
