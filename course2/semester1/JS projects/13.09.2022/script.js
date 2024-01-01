// задание 1

let min = 34

if(min < 0){
    console.log('эээ харам!!!')
} else if(min < 15){
    console.log('первая четверть')
} else if(min < 30){
    console.log('вторая четверть')
} else if(min < 45){
    console.log('третья четверть')
} else if(min < 60){
    console.log('четвертая четверть')
} else {
    console.log('пошел вон отсюда, шутник!!')
}

// задание 2

let word = 'строка'

let result = (word.length % 2 == 0) ? 'YES' : 'NO'
console.log(result)
//  или
console.log(Boolean(!5%2))

// задание 3

let age = 12
let res = (age >= 0 && age < 6) ? 'полная недееспособность' : (age >= 6 && age < 18) ? 'частичная дееспособность' : 'полная дееспособность'
console.log(res)

// задание 4

let speed = 67

let res = (speed < 0) ? 'невозможно!!' : (speed <= 30)? 'вы едите слишком медленно' : (speed <= 70) ? 'вы едите с нормальной скоростью' : 'вы едите слишком быстро'
console.log(res)

// задание 5

let task = 'asalamaleykum'
switch (task){
    case 'asalam':
        console.log('aleykum')
        break
    case 'aleykum':
        console.log('asalam')
        break
    case 'asalamaleykum':
        console.log('aleykumasaslam')
        break
    default:
        console.log('eeey wata hel')
}