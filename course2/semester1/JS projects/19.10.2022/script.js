// let date = new Date('2022-10-18 15:50:10')

// console.log(date.getFullYear())
// console.log(date.getMonth() + 1)
// console.log(date.getDate())

// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// методы для переопределения значений компонентов даты //

// let date = new Date('2022-10-18 15:50:10')

// date.setFullYear(1999)
// date.setMonth(0)
// date.setDate(25)

// date.setHours(15)
// date.setMinutes(15)
// date.setSeconds(15)
// date.setMilliseconds(555)

// console.log(date)

// // компонент, возр. день недели (0 - воскр.)//
// console.log(date.getDay())


////////

// let date = new Date()
// // console.log(
// // date.getFullYear() + 5,
// // date.getMonth(),
// // date.getDate()
// // )


// // date.setFullYear(2027)


// date.setFullYear(date.getFullYear()+5)


// console.log(date)



// let date = new Date('2020-01-03')


// function checkDate(year, func){
//  return (year % 4 == 0)
// }
// console.log(checkDate(date.getFullYear()))


// let date = new Date()

// function logDay(date){
//     // if(date == 0){
//     //     console.log('сегодня воскресенье')
//     // } else if(date == 1){
//     //     console.log('сегодня понедельник')
//     // } else if(date == 2){
//     //     console.log('сегодня вторник')
//     // } else if(date == 3){
//     //     console.log('сегодня среда')
//     // } else if(date == 4){
//     //     console.log('сегодня четверг')
//     // } else if(date == 5){
//     //     console.log('сегодня пятница')
//     // } else {
//     //     console.log('сегодня суббота')
//     // }

//     let days = ["воскресенье", "понедельник", "вторник", "ср", "чт", "пт", "сб"]
//     console.log(`сегодня ${days[date.getDay()]}`)
// }
// logDay(date)


// function endDay(){
//     let currentDate = new Date()
//     let endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1)
//     console.log(currentDate)
//     console.log(endDate)
//     let res = currentDate.getTime() - endDate.getTime() / 1000
//     return Math.round(res)
// }
// console.log(endDay())