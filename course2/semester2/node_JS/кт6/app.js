// const fs = require('fs')

// fs.readFile('hello.txt', 'utf8',
//     function(err, data){
//         console.log('асинхронное чтение файла')
//         if(err) throw err
//         console.log(data)
//     }
// )

// console.log('синхронное чтение файла')
// let FCsync = fs.readFileSync('hello.txt', 'utf8')
// console.log(FCsync)


// const fs = require('fs')

// console.log('синхронное чтение файла')
// fs.writeFileSync('hello.txt', 'hello everybody')
// let FCsync = fs.readFileSync('hello.txt', 'utf8')
// console.log(FCsync)

// fs.writeFile('hello.txt', 'hi everyone', function(err){
//     if(err) throw err
//     console.log('асинхронная запись в файл завершена, его содержимое:')
//     let data = fs.readFileSync('hello.txt', 'utf8')
//     console.log(data)
// })

// console.log('синхронное чтение файла')
// const fs = require('fs')

// fs.appendFileSync('hello.txt', '?')
// // let FCsync = fs.readFileSync('hello.txt', 'utf8')
// // console.log(FCsync)

// fs.appendFile('hello.txt', '!', function(err){
//     if(err) throw err
//     console.log('асинхронная запись в файл завершена, его содержимое:')
//     let data = fs.readFileSync('hello.txt', 'utf8')
//     console.log(data)
// })

// const fs = require('fs')
// fs.unlinkSync('hello.txt')
// console.log('hello.txt was deleted')
// fs.unlink('hello2.txt', (err) => {
//     if(err) console.log(err)
//     else console.log('hello.txt2 was deleted')
// })