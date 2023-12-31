let array = [2,56,66,777,20]

function func(arr, num){
    let res = -1
    for(let i of arr){
        if(arr[i] == num){
            res = i
        }
    }
    return res
}
console.log(func(array, 66))

// let array = [2,56,66,777,20]

// function func(arr, num){
//     let res = -1
//     let i = 0
//     while(i <= arr.length){
//         if(arr[i] == num){
//             res = i
//               break
//         }
//         i++
//     }
//     return res
// }
// console.log(func(array, 20))