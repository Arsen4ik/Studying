let date1 = new Date('2022-10-18 15:50:00 GMT')
console.log(date1)

//

let date2 = new Date(2022,10,18,15,50)
console.log(date2)

//

let date3 = new Date(999999999999)
console.log(date3)

//

let date4 = new Date(2022*18*18*15*5*6 + 1*2*4*5*2*5*5)
console.log(date4)

//

let date = Date()
console.log(date)

/////

let date = Date.now()
console.log(Math.round(date / 1000 / 60 / 60))

/////

let date = new Date()
let date2 = new Date(2000,0,1)

let result = (date.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)

console.log(Math.round(result))