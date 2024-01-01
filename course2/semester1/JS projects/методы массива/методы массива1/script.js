
// методы массива

// filter
// let a = [1,2,3,4,5]
// let b = a.filter((value) => value < 3)
// console.log(b)

// задача 1

// let array = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]

// console.log(array.filter((val) => typeof val == 'boolean'))

// задача 2

// let array = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']

// console.log(array.filter((val) => val[0] == 'А'))

// console.log(array.filter((val) => val.startsWith('А')))
// console.log(array.filter((val) => val.indexOf('А') == 0))

// let a = [1,2,3,4,5]

// 1 - значение элементов массива
// 2 - индексы элементов массива
// 3 - целый массив

// console.log(a.filter((value, index, array) => console.log(value, index, array)))

// задача 3

// let array = [1,2,3,4,6,6,9,8]

// console.log(array.filter((val, ind) => val % 2 == 0 && ind % 2 == 0))

// let data = [
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000},
//     {id : 21, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000}, 
//     {id : 4, goods: 'Ракетки', count: 30, price: 1000},
//     {id : 0, goods: 'Скейтборд', count: 8, price: 999},
// ]

// console.log(data.filter((val) => val.id >= 3))

// задача 4

// let data = [
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000},
//     {id : 21, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 4, goods: 'Ракетки', count: 30, price: 1000},
//     {id : 0, goods: 'Скейтборд', count: 8, price: 999},
// ]
// // num 1
// console.log(data.filter((val) => val.id % 2 !== 0 && val.price.toString().length == 3))
// console.log(data.filter((val) => val.id % 2 !== 0 && ''+val.price.length == 3))

// // num 2
// console.log(data.filter((val) => val.count*val.price > 10000))
