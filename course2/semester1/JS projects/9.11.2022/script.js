
// метод Object.assign() - для копирования св-в в новый объект

// let obj1 = {
//     name: 'test',
//     salary: 1000
// }
// // let obj2 = {  
// //     name: 'test',
// //     salary: 1000
// // }

// let obj2 = Object.assign({}, obj1)
// obj2.f = 'g'
// console.log(obj2)
// console.log(obj1)

// console.log(obj1 == obj2)

// 2) объединять сво-ва двух объектов в 1

// let obj1 = {
//     name: 'test',
//     salary: 1000
// }
// let obj2 = {  
//     name2: 'text',
//     salary2: 10
// }
// let res = Object.assign(obj1, obj2)
// console.log(res)

// Object.is(val1, val2) - проверка равенства значений val1 и val2

// console.log(Object.is(NaN,NaN))
// console.log(NaN === NaN)

// задача 1

// let user_11 = {id: 1}
// let user_12 = {username: 'user'}
// let user_2 = {
//     id: 1,
//     username: 'user'
// }

// let user_1 = Object.assign(user_11, user_12)

// console.log(Object.is(user_1, user_2))
// console.log(JSON.stringify(user_1) === JSON.stringify(user_2)) - correct one

// задача 2

// let checkObj = function(obj){
//     for(let i in obj){
//     if(obj[i]){
//         return false
//     } 
// }
// return true
// }

// let obj1 = {}
// let obj2 = {
//     name: 'A'
// }
// let obj3 = {

// }


// function checkObj(obj){
//     return Object.keys(obj).length == 0
// }

// console.log(checkObj(obj1))
// console.log(checkObj(obj2))
// console.log(checkObj(obj3))

// задача 3

function checkObjectLength(obj1, obj2){
    // let arr1 = []
    // let arr2 = []
    // for(let i in obj1){
    //     let arrSmall = []
    //     arrSmall.push(i)
    //     arrSmall.push(obj1[i])
    //     arr1.push(arrSmall)
    // }
    // for(let i in obj2){
    //     let arrSmall = []
    //     arrSmall.push(i)
    //     arrSmall.push(obj2[i])
    //     arr2.push(arrSmall)
    // }
    // return arr1.length == arr2.length
    return Object.entries(obj1).length == Object.entries(obj2).length
}

let obj1 = {
    age: 5
}
let obj2 = {
    name: 'A'
}

console.log(checkObjectLength(obj1, obj2))