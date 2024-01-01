
// задача 1

// let a = [1,2,3,4,5,6,7,8,9]

// // function func(arr, call){
// //     return call(arr)
// // }
// // console.log(func(a, (a) => {
// //     for(let i of a){
// //         if(i < 5)
// //         console.log(i)
// //     }
// // }))
// function func(arr, call){ 
//     let newArr = []
//     for(let i of arr){
//         if(call(i)){
//             newArr.push(i)
//         }
//     }
//     return newArr
// }
// console.log(func(a, (elem) => elem < 5))

// задача 2

// let a = [1,2,3,4,5]

// function func(arr, call){
//     let newArr = []
//     let aa = []
//     let bb = []
//     let cc = []
//     for(let i = 0; i < arr.length; i++){
//         if(call(arr[i], call(i), call(arr))){
//                 aa.push(arr[i]),
//                 bb.push(i),
//                 cc.push(arr)
//         }
//     }
//     return newArr.push(aa, bb, cc)
// }
 
// function func(arr, call){
//     let newArr = []
//     for(let i in arr){
//         if(call(arr[i], i, arr)){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// let res = func(a, (elem, el, e) => console.log(elem, el, e))
// let res2 = func(a, (elem) => elem < 3)

// console.log(res)
// console.log(res2)


// метод find() - вернуть найденный элемент

// let a = [3,4,5,6,7]

// console.log(a.filter((elem) => elem > 5))
// console.log(a.find((elem) => elem > 5))

// метод findIndex() - вернуть индекс найд элем

// let a = [3,4,5,6,7]

// console.log(a.findIndex((elem) => elem > 5))
// console.log(a.findIndex((elem) => elem == 5))
// console.log(a.findIndex((elem) => elem < 5))

// function func(arr, opt2, znak){
//     let newArr = []
//     for(let i in arr){
//         if(znak == '>'){
//             if(i > opt2){
//             newArr.push(arr[i])
//         }
//         else if(znak == '<'){
//             if(i < opt2){
//             newArr.push(arr[i])
//         }
//     }
//     } else if(znak == '=='){
//         if(i == opt2){
//             newArr.push(arr[i])
//         }
//     }
//     }
//     return newArr
// }
// console.log(func(a, '5', '>'))