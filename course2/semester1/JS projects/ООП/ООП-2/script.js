 
// классовое представление шаблонизатора

// let res = class Goods {
//     constructor(name, flag){
//         this.name = name
//         this.flag = flag
//     }
// }
// console.log(new res('a','b'))

// class Goods {
//     constructor(name, flag){
//         this.name = name
//         this.flag = flag
//     }
//     log(){
//         console.log(`${this.name} - пора переворачивать`)
//     }
// }
// let obj1 = new Goods('шашлыки', true)
// console.log(obj1)

// console.log(typeof Goods)
// console.log(typeof obj1)

// console.log(obj1.log())

// number 1

// class Array2 {
//     constructor(data){
//         this.data = data
//     }
//     first(ind){
//         return this.data[ind]
//     }
// }
// let obj1 = new Array2([2,5,8,0])
// console.log(obj1)

// obj1.first(2)
// console.log(obj1.first(3))


// статические метода и свойства классов

// class Data {
//     constructor(string){
//         this.string = string
//     }
//     log(){
//         console.log(`${this.string} this is a string!`)
//     }
//     static number = 100
//     static quadNumber(){
//         console.log(this.number ** 2)
//     }
// }
// let obj1 = new Data('some')
// console.log(obj1)

// obj1.log()
// console.log(obj1.string)

// // console.log(obj1.number)
// // console.log(obj1.quadNumber)
// console.log(Data.number)
// console.log(Data.quadNumber())
// Data.quadNumber()

// примеры статических методов и свойств с которыми мы уже сталкивались

// let obj = new Object({name: 'Alex', age: 30})
// console.log(obj)
// console.log(Object.keys(obj))

// number 2

// class Object2 {
//     constructor(obj){
//         this.obj = obj
//     }
//     keys(){
//         let newArr = []
//         for(let i in this.obj){
//             newArr.push(i)
//         }
//         return newArr
//     }
// }

// let res = new Object2({name: 'Arsen', age: 17})
// console.log(res)
// console.log(res.keys())

// class Object2 {
//     static keys(obj){
//         let arr = []
//         for(let keys in obj){
//             arr.push(keys)
//         }
//         return arr
//     }
// }

// Date.now()

// let obj3 = new Object2({ff: 55})
// console.log(obj3.keys())
// console.log(Object2.keys({name: 10, age: 30}))
// console.log(Object2.keys({name2: 20, age2: 40}))

// number 2.1

// class Object2 {
//     static entiries(obj){
//         let arr = []
//         for(let keys in obj){
//             arr.push(keys, obj[keys])
//         }
//         return arr
//     }
// }


// console.log(Object2.entiries({name: 10, age: 30}))
// console.log(Object2.entiries({name2: 20, age2: 40}))

// another dicision

// class Object2 {
//     static entries(obj){
//         let BigArr = []
//         for(let keys in obj){
//             let arr = []
//             arr.push(keys, obj[keys])
//             BigArr.push(arr)
//         }
//         return BigArr
//     }
// }

// еще одно решение для 2.1
// class Object2 {
//     static entries(obj){
//             let arr = []
//             for(let i in obj){
//                 arr.push([i, obj[i]])
//             }
//             return arr
//     }
// }

// // let obj = {1: 'g', 2: 'h'}

// // console.log(Object.entries(obj))

// console.log(Object2.entries({name: 10, age: 30}))
// console.log(Object2.entries({name2: 20, age2: 40}))