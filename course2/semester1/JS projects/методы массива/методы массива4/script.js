// методы some и every

// // some() - метод массива кот отв на вопр есть ли хоть 1 эл кот удовл условию колбека , boolean

// let a = [2,3,5,6,7]
// console.log(a.some(elem => elem > 3))
// console.log(a.some(elem => elem == 4))


// // every() - метод массива кот отв на вопрос все ли эл выполн усл колбека, boolean
// console.log(a.every(elem => elem > 0))
// console.log(a.every(elem => elem > 3))

// // задача 1 
// let a = [2,3,5,6,7]
// function func(arr, call){
//     for(let i of arr){
//         if(call(i)){
//             return true
//         }
//     }
//     return false
// }
// console.log(func(a, (el => el > 5)))


// let goods = [
//     {id: 4, name: 'Скейтборд', quantity: 30},
//     {id: 4, name: 'Самокат', quantity: 15},
//     {id: 3, name: 'Велотренажер', quantity: 20},
//     {id: 3, name: 'Велосипед', quantity: 5},
// ]

// console.log(goods.some(el => el.id % 2 == 0 && el.quantity % 10 == 0))


// метод map() - возвращает новый массив, элементы которого меняются по правилам колбек-функций

// let a = [1,2,3,4]

// console.log(a.map(elem => Math.pow((elem),3)))

// let b = ['a', 'fgh', 'EEEE']

// console.log(b.map(elem => elem += 2))

// задача 2

// let prices = [100,400,250,1000,499]

// console.log(prices.map(el => Math.ceil(el * 0.85)))

// задача 3

// let goods = [
//     {id: 4, name: 'Скейтборд', quantity: 30},
//     {id: 4, name: 'Самокат', quantity: 15},
//     {id: 3, name: 'Велотренажер', quantity: 20},
//     {id: 3, name: 'Велосипед', quantity: 5},
// ]

// // console.log(goods.map(el => el.id ** 2))
// // console.log(goods.map(el => el.name.length))
// // console.log(goods.map(el => el.quantity * el.id))
// let res = goods.map(el => ({id: el.id ** 2, name: el.name.length, quantity: el.quantity * el.id}))
// console.log(res)
