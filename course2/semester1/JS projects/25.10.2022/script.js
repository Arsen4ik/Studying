// // конкатинация строк - concat()
// let a = 'hi'
// let b = 'friend'

// console.log(a.concat(b))

// // повтор строк n-ое кол раз

// let a = 'hello'

// console.log(a.concat(b).repeat(5))


// // ---
// // includes() - проверяет, сущ ли заданная строка в потоке

// let a = 'fuck smn'

// console.log(a.includes('smn'))

// // ----
// // stastWith() - находится ли подстрока в начале строки

// let a = 'fuck smn'

// console.log(a.startsWith('Fuck'))
// // есть еще endsWidth()

// //----
// // indexOf() - возвращает индекс начала заданной подстроки

// let a = 'hi '

// let b = 'aaatg'

// console.log(a.concat(b).indexOf('t'))
// //
// let a = 'gh bb sms bb'

// console.log(a.indexOf('bb',4))

// // lastIndexOf() - тоже самое но с конца

// let a = 'gh bb sms bb'

// console.log(a.lastIndexOf('s'))



// // задача 1

// let date = '2022.10.22'

// console.log(date.includes('/') ? 'формат даты Американский' : 'Формат даты Российский')
// //
// // if(date.indexOf('/' == 4))

// // задача 2

// let emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro']

// function func(arr){
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i].includes('@') && arr[i].includes('.')){
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
// }
// func(emails)

// // for(let i = 0; i <= emails.length; i++){
// //     console.log(emails[i].includes('@') && emails[i].includes('.'))
// // }
let phones = ['+7975644911','8975644944','+7975644999','+7975644945']

let a = function(arr){
    let newPhones = []
    for(let i = 0; i <= arr.length; i++){
        if(arr[i].includes('+7')){
            newPhones[i] = arr[i]
        }
    }
    return newPhones
}
console.log(a(phones))

// задача 3

let phones = ['+7975644911','8975644944','+7975644999','+7975644945']


    let newPhones = []
    for(let i = 0; i <= phones.length; i++){
        if(phones[i].startsWith('+7')){
            newPhones[i] = phones[i]
        }
    }

console.log(newPhones)

// ----- 2 pair ----- //

// slice(n, m) - возрасщает  подстроку указав диапозон индексов от n (вкл) до m (не вкл)

let a = 'hi gitler'
console.log(a.slice(0,6))
console.log(a.slice(3))

// substring(n,m) - как slice, но ...

let a = 'hi gitler'
console.log(a.substring(0, 6))
console.log(a.substring(8,1))
console.log(a.substring(5,1))
//
let string1 = 'date 10.10.10 date 20.20.20 date 30.30.30'  

// let string1 = '10.10.10 date 20.20.20 date 30.30.30 date'  

// let a = string1.indexOf('date', 13)

// console.log(string2.indexOf('date', a))

console.log(string1.indexOf('date',string1.indexOf('date')+1))

//


let email = 'thegreat@mail.com'

console.log(email.slice(0,email.indexOf('@')))
console.log(email.slice(email.indexOf('@')+1, email.indexOf('.')))
console.log(email.slice(email.indexOf('.')+1))


/// replace - заменяет одну подстроку на другую , replaceAll ...


let phones = ['891 11112 233','89111-1122-44','8911-11122-55','89111112266']

let newArr = []
let a = function(arr){
for(let i = 0; i < arr.length; i++){
    newArr[i] = arr[i].replace('8', '+7').replaceAll(' ', '').replaceAll('-', '')
}
    return newArr
}
console.log(a(phones))