// reast и spread argument

// function log(...arg){
//     console.log(...arg)
// }
// log(1,3)


// function hand(...arg){
//     for(let i of arg){
//         console.log(i)
//     }
// }
// hand(1,2,3)

// задача 1
// function getSum(...arg){
//     let res = 0
//         for(let i of arg){
//             res += i
//         }
//     return res
// }
// console.log(getSum(1,2,3))

// задача 2
// function checkElem(...arg){

//     let a = arg.slice(0,1)
//     console.log(a)
//     let b = arg.slice(1)
//     console.log(b)

//     for(let i of b){
//         if(a.includes(b[i])){
//             return true
//         } else {
//             return false
//         }
//     }


// }
// function checkElem(a, ...rest){
//     for(let i of rest){
//         if(i == a){
//             return true
//         }
//     }
//     return false
// }
// console.log(checkElem(1,2,3,1,4))

// задача 3
function checkString(...arg){
    let res = []
    for(let i of arg){
        if(typeof i == 'string'){
            res += i += ' '
        }
    }
    return res
}
console.log(checkString(1,'rr', true, 6,'g'))

// задача 4
function getAvg(...arg){
    let res = 0
    for(let i of arg){
        res += i
    }
    return res / arg.length
}
console.log(getAvg(1,3,5,10))