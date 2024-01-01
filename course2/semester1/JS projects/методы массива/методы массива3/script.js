// задача 1
// let users = [
//     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
//     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 31},
//     {id: 3, name: 'Tigran', lastname: 'Movsisyan', age: 35}
// ]

// console.log(users.find((el) => el.id % 2 == 0 && el.age < 33))

// задача 2
// users = [
//     {login: "user1", role: "Admin"},
//     {login: "user2", role: "State user"},
//     {login: "user3", role: "Moderator"}
// ]
 
// console.log(users.findIndex((el) => el.role.includes(' ')))

// sort() - метод возращающий новый отсортированный массив

// let arr = ['арбуз', "яблоко", "банана"]
// console.log(arr.sort())

// let array = [1,2,4,3,5]

// // let res = array.sort((cur, nex) => {
// //     if(cur > nex) return 1
// //     if(cur < nex) return -1
// //     if(cur == nex) return 0
// // })
// // console.log(res)

// let res = array.sort((cur, nex) => cur - nex)
// let res2 = array.sort((cur, nex) => nex - cur)

// console.log(res)
// console.log(res2)

// задача 3

// let data = [
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000},
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 4, goods: 'Ракетки', count: 30, price: 1000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
// ]

// console.log(data.sort((el, next) => {
//     if(el.goods > next.goods) return 1
//     if(el.goods < next.goods) return -1
//     if(el.goods == next.goods) return 0

// }))
// console.log(data.sort((el, next) => el.count - next.count))
// console.log(data.sort((el, next) => el.count*el.price - next.count*next.price))
