const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Welcome to this page")
    } else if(req.url === "/about") {
        res.write("About this page")
    } else {
        res.write("Oops! does not exist")
    }
    res.end()
})

server.listen(5000)