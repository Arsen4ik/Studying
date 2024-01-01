let num = 4
let res = 1
for(let i = 1; i <= num; i++){
    res *= i
}
console.log(res)
////
let x = 10
let y = 20
let res = 0

for(let i = x; i <= y; i *= 1.1){
    res++
}
console.log(res)
/////
let str = 'компьютер'
let res = ''

for(let i = 0; i <= str.length-1; i++){
    res += str[i]
    if(str[i] == 'п'){
        break
    }
}
console.log(res)