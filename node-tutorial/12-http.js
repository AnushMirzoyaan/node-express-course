const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("welcome to our homepage")
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(
        `
         <h1>
            Oops !
         </h1>
         <p>The page yuu are looking for : <a href="/">here</a> </p>
        `
    )

})

server.listen(5000)