
// // метод forEach() - метод позв задать итерацию по массиву одной строкой
// let array = [1,2,3,4,5]

// console.log(array.forEach(elem => console.log(elem)))

// метод reduce() - функция для агрегационных вычеслений

// let array = [1,2,3,4,5]

// // for(let i of array){
// //     sum = sum + i
// // }
// // console.log(sum)
// let res = array.reduce((sum, elem) => sum + elem, 0)
// console.log(res)

// // задача 1
// let goods = [
//     {id: 4, name: 77777, price: 3500, quantity: 30},
//     {id: 4, name: 5555, price: 1300, quantity: 15},
//     {id: 3, name: 3333, price: 999, quantity: 20},
//     {id: 3, name: 222, price: 5400, quantity: 5},
// ]

// console.log(goods.reduce((sum, el) => sum + el.price, 0))
// console.log(goods.reduce((mult, el) => mult * el.quantity, 1))
// let res3 = Number(goods.reduce((mult, el) => mult + el.name.toString()[0], ''))
// console.log(res3)
// console.log(typeof res3)


// // передает значение аккумолятора кот расч слева-направо
// // reduceRight - наоборот

// let array = [1,2,3,4,5]
// console.log(array.reduce((accum, elem) => accum + elem, ''))
// console.log(array.reduceRight((accum, elem) => accum + elem, ''))

// console.log(array.reduceRight((acum, elem) => {
//     console.log(acum, elem)
//     return acum + elem
// }))

// задача 2

// let goods = [
//     {id: 4, name: 'Скейтборд', price: 3500, quantity: 30},
//     {id: 4, name: 'Самокат', price: 1300, quantity: 15},
//     {id: 3, name: 'Велотренажер', price: 999, quantity: 20},
//     {id: 3, name: 'Велосипед', price: 5400, quantity: 5},
// ]

// console.log(Math.ceil(goods.reduce((res,el) => res + el.price/goods.length,0)))