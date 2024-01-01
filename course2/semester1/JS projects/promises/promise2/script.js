// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let arr = [1,2,3]
//         console.log('inti arr', arr)
//         resolve(arr)
//         // reject('Mis')
//     }, 2000)
// })
// // .then( ... )
// // method then дожидается когда promise получит функцию resolve (усп вып функ)
// promise
// .then((data) => {
//     console.log(data) 
//     data.push(5)
//     console.log(data)
//     return data})
// .then(data => console.log(`кончина: ${data}`))
// .then(() => console.log('end'))

// promise
// .catch((err) => {
//     console.log(err)
// })

// promise
// .then( data => {
//     data.push(4)
//     console.log(data)
//     return data
// })
//  .catch(e => console.log(e))
//  .then( data => {
//     data.push(40)
//     console.log(data)
// })
//  .finally(() => console.log('finally'))

// method fetch() - инструмент кот позволяет работать с HTTP запросами


// let url = 'https://jsonplaceholder.typicode.com/posts'

// console.log(fetch(url))
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

// task 1

 let url = 'https://jsonplaceholder.typicode.com/posts'

console.log(fetch(url))

let arr = []

// // fetch(url)
// // .then(res => res.json())
// // .then((data) => {
// //     if(data.id = 9){
// //         arr.push(data)
// //         console.log(arr)
// //     }
// // })

fetch(url)
.then(res => res.json())
.then(data => {
    let posts = data.filter(el => el.userId == 9)
    console.log(posts)
})
.catch((el) => console.log('mist', el))
