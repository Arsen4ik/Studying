// задание 1

let word = 'Арнольд'
let result = ''
for(let i = 0; i < word.length; i++){
    if(word[i].toLowerCase() !== 'а' && word[i].toLowerCase() !== 'о'){
        result += word[i]
    }
}
console.log(result)

// задание 2

let num = 20

for(let i = 0; i <= num; i++){
    if(i % 3 == 0){
        console.log(i)
    }
}

// задание 3

let num = 5
let result = ''

for(let i = 1; i <= num; i++){
    result += i
    console.log(result)
}

// задание 4

let num = 4
let factorial = 1
let result = 0

for(let i = 1; i <= num; i++){
    factorial *= i
    result += factorial
}
console.log(result)

// задание 5

let word = 'потоп'
let res = ''

for(let i = word.length-1; i >= 0; i--){
    res += word[i]
}

if(res === word){
    console.log('Yes')
} else {
    console.log('No')
}
// let word = 'поп'
// let res = ''

// let r = (res = word.split('').reverse().join('') === word) ? true : false
// console.log(r)