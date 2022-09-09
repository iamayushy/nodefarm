const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
    const urlPath = req.url
    console.log(urlPath)

    if(urlPath === "/overview" || "/"){
        res.end("I hold information about the product.");
    }
    else if(urlPath === "/details"){
        res.end("I show important information on the product");
    }
    else{
        res.writeHead(404, {'Content-type':'text/html'});
        res.end('<h1>Page Is Down</h1>');
    }
})
const PORT = 3000
app.listen(PORT, () => {
    console.log("server is running at ", PORT)
})
