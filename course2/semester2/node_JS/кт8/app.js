const http = require('http')
const fs = require('fs')

http.createServer(function(request, response){
    fs.readFile("index.html", "utf8", (error, data) => {
        let message = 'изучаем node.js!'
        let header = 'главная страница'
        data = data.replace("{header}", header).replace("{message}", message)
        response.end(data)
    })
}).listen(3000)