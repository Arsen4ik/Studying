// задание 1

let price = 20
let range = 'week'

let rang = (range == 'day') ? 'день' : (range == 'month') ? 'месяц' : 'неделю'
result = price + ' Р в ' +rang
console.log(result)

 // задание 2

 let temp = 26
let weather = 'cloudy'
let activity = ''

if (temp >= 25 && weather == 'clear'){
    activity = 'golf'
} else if ((temp < 25 && temp >= 10) || weather == 'cloudy'){
    activity = 'bowling'
} else {
    activity = 'hiking'
}
console.log(activity)

// задание 3

// часть 1

let a = 6
let b = 8

let sign = '-'

let result = 0

if(b !== 0 || sign !== '') {
    if(sign == '+'){
        result = a + b
    } else if(sign == '-'){
        result = a - b
    } else if(sign == '*'){
        result = a * b
    } else if(sign == '/'){
        result = a / b
    }
}
console.log(result)

// часть 2

let a = 6
let b = 0

let sign = "+"

let result = 0

if(b !== 0) {
    if(sign == '+'){
        result = a + b
    } else if(sign == '-'){
        result = a - b
    } else if(sign == '*'){
        result = a * b
    } else if(sign == '/'){
        result = a / b
    }
} else {
    console.log('делить на 0 нельзя')
}
console.log(result)

// задание 4

let word = 'ура!'

let result = 0

if(Math.sqrt(word.length) % 1 == 0){
    result = 1
} else {
    result = 0
}
console.log(result)