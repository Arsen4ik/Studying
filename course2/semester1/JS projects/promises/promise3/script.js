// get and post запросы

// let url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url)
// .then(res => res.json())
// .then(data => {
//     let posts = data.filter(el => el.userId == 9)
//     console.log(posts)
// })

// пример get запроса
// let url = 'http://158.160.53.101:8000/api/posts/'
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

// пример post запроса
// let url = 'http://158.160.53.101:8000/api/posts/'

// let data = {
//     title: 'новость 1',
//     text: 'какие эчпочмаки??!',
//     topic: 1
// }

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(data)
// })
// .then(res => res.json())
// .then(data => console.log(data))

// ------------

// async await конструкция
// async ставится перед асинхроной функ
// await ставится перед промисом
// async function getData(){
//     let url = 'http://158.160.53.101:8000/api/posts/'
//     let res = await fetch(url)
//     let data = await res.json()
//     let post = data.filter(elem => elem.topic == 2)
//     console.log(post)
// }
// getData()

// --------

// EX1 - 40 строка - ошибка
// try ... catch

// let a = 10
// data
// console.log('hhh')

// EX2

// try {
//     let a = 10
//     data
//     // console.log(a)
// } catch(e){
//     console.log(e)
//     console.log('mistake')
// }
// console.log('test')

// EX3

async function getData(){
    try {
    let url = 'http://158.160.53.101:8000/api/posts/'

        let res = await fetch(url)
        let data = await res.json()
        let post = data.filter(elem => elem.topic == 2)
        console.log(post)
        datar
    } catch(e) {
        console.log(e)
    }
    console.log('rr')
}
getData()