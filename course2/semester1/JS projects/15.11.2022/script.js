// взаимодействие с массивом

// function res(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] == 'boolean'){
//             arr[i].splice(i,1,'булевый', "тип")
//         }
//     }
//     console.log(arr)
// }

// let array = [1,'r',true,4,false]

// console.log(res(array))

// let a = [1,2,3,4,5,6,7]
// console.log(a.slice(-3))

// let array = [10, 20]

// // let a = array[0]
// // let b = array[1]

// console.log([a,b,c,d] = array)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// let [a,b] = [1,2,3,4]

// console.log(a,b)


// Rest-аргумент - представление каждого элемента массива как отдельный аргумент функции/метода

// let arr = [1,2,3,4]
// // for(let i = 0; i < arr.length; i++){
// //     console.log(arr[i])
// // }
// console.log(...arr)


// let a = [1,2,3]
// let c = [5,6,7]
// let b = [-1,...a,4,...c]
// a.push(10)
// console.log(a,b)

// let array = [1,2,3,4]

// let [a,b, ...c] = array

// console.log(a,b,c)


// let array = [1,2,3,4]

// let [a,b, ...c] = array.reverse()

// console.log(a,b,c)


// let array = [100,200,600,-400,-100,1000]
// // console.log(Math.max(...array))
// // console.log(Math.min(...array))
// let [max, min] = [Math.max(...array), Math.min(...array)]

// console.log(max)
// console.log(min)
