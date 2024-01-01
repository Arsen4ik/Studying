
//  let a = [10,20,30,'g',40]
//console.log(a.indexOf(20))

// for(let i in a){
//     if(a[i] == 20){
//         console.log(i)
//         break
//     }
// }

// console.log(a.lastIndexOf(20))

// console.log(a.includes(20))

// console.log(a.reverse())

//  let b = 'aaa taaa'
// console.log(b.split(''))

// console.log(a.join(''))

// задача 1
let word = 'наушники'


console.log(word.split('').reverse().join(''))

// задача 2

let word = 'поп'
console.log(word === word.split('').reverse().join(''))

// задача 3

function check(num){
    let arr = [1,2,3,4]

    if(arr.includes(num)){
        arr.splice(arr.indexOf(arr.num)-1,1, num ** 2)
    } else {
        arr.push(num)
    }
    return arr
}
console.log(check(6))
console.log(check(3))