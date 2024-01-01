let word = 'велосипед'
let i = word.length-1
let newWord = ''

while (i >= 0){
    newWord += word[i]
    i--
}
console.log(newWord)
////
let num = 5
let string = ''
let i = 1

do {
    string += i
    i++
} while (string.length<num)

console.log(string)
////
let start = 6
let end = 31

let i = start

let res = ''
while(i <= end){
    if(i % 5 == 0){
    res += i + ' '
    }
    i++
}
console.log(res)
////
let num = 4
let res = 0

let i = 0
while(i <= num){
    res += i ** 2
    i++
}
console.log(res)