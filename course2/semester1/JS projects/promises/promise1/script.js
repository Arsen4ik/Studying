// введение в промисы

// пример ассинхонной функции
// function func1(){
//     setTimeout(() => {
//         console.log('test 1')
// func2()
//     }, 2000)
// }

// function func2(){
// console.log('test 2')
// }
// func1()
// проблема во вложенности

//

// пример синхронной функции
// console.log('loading')
// setTimeout(() => {
//     let data = [1,2,3,5]
//     console.log('data ...', data)

//     setTimeout(() => {
//         data.push(4)
//         console.log('init ...', data)
//     }, Math.random()*2)
// }, Math.random()*2)

// -----------------
// promise

let promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let data = [1,2,3]
        console.log('data ...', data)
        resolve(data)
    }, Math.random() * 2) 
})

// console.log(promise)
// console.log(typeof promise)


let promise2 = promise.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        data.push(5)
        console.log('init ...', data)
        resolve(data)
    }, Math.random()*2)
    })
})
let promise1 = promise.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        data.push(4)
        console.log('init ...', data)
        resolve(data)
    }, Math.random()*2)
    })
})