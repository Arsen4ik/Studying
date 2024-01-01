// задание 1

function func(arr){
    let newStr = ''
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'string'){
            newStr += arr[i] += ' '
        }
    }
    console.log(newStr)
}
let array = [1,'Rus', false, 'sia', -2]
func(array)

// задание 2

// // let result = 0
// // function func2(num){
// //     return result = num**2
// // }
// // let res = func2(11)
// // res
// // console.log(res-10)
// // result
// // console.log(result+2)

// function func2(n){
//     return Math.round(Math.random()*n)
// }

// let arr = []

// for(let i = 0; i < 5; i++){
//     arr.push(func2(100))
// }

// console.log(arr)

// function func2(){
//     return Math.round(Math.random()*100) + ' '
// }

// let arr = []

// for(let i = 0; i < 5; i++){
//     arr += func2() 
// }

// console.log(arr)

// function func2(){
//     return Math.round(Math.random()*100) + ' '
// }

// let arr = []

// for(let i = 0; i < 5; i++){
//     arr[arr.length] = func2() 
// }

// console.log(arr)