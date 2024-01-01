
// // let date1 = new Date('2022-10-21')
// // let date2 = new Date('2022-10-10')

// // console.log(date1.getTime() == date2.getTime())

// // let res = date1.getTime() + 1000000000
// // console.log(res)

// // let date = new Date('2022-10-21 15:30:00 GMT')
// // console.log(date)

// // date.toLocaleDateString
// // date.toLocaleString
// // date.toLocaleTimeString

// // let str = date.toLocaleDateString('ru-RU')
// // console.log(str)


// // n 1
// // function checkDate(){
// //     let currentDate = new Date()
// //     let date1 = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 1)


// //     let res = (date1.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
// //     console.log(res)
// // }
// // checkDate()

// // n 2

// let dates = [
//     [new Date('2021-04-15 10:15:20')],

//     [new Date('1998-10-22 01:10:40')],

//     [new Date('2020-04-12 06:20:50')],

//     [new Date('2040-04-03 14:30:59')],

//     [new Date('2017-04-10 22:50:40')],
// ]

// function func(arr){
//     let newArr = []

//     for(let i = 0; i < arr.length; i++){
//         newArr[i] = (arr[i][0].toLocaleDateString('ru-RU'))
//     }
//     return newArr
// }
// let result = func(dates)
// console.log(result)


// // for(let i = 0; i < arr.length; i++){
// //     let options = {year: "numeric", month: "numeric", day: "numeric"}
// //     newArr[i] = (arr[i][0].toLocaleDateString('ru-RU'), options)

// // //    newArr[i] = (arr[i][0].toLocaleDateString('ru-RU'), {year: "numeric", month: "numeric", day: "numeric"})

// // }
