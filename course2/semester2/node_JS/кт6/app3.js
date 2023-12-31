const fs = require('fs')

// let writeableStream = fs.createWriteStream('hello.txt')
// writeableStream.write('hi there')
// writeableStream.write('!!! \n')
// writeableStream.end('ending')


// readableStream.on('data', function(chunk){
//     console.log(chunk)
// })

const zlib = require('zlib')
let readableStream = fs.createReadStream('hello.txt', 'utf8')

let writeableStream = fs.createWriteStream('hello.txt.gz')

let gzip = zlib.createGzip()

readableStream.pipe(gzip).pipe(writeableStream)