const http = require('http')

let c = 0

const server = http.createServer((request, response) => {

    c++

    switch (request.url) {
        case '/student':
            response.write('student ')
            break;
        case '/':
        case '/courses':
            response.write('Fromt + Back ')
            break;
        default:
            response.write('404 not faund ')
    }

    response.write('Vlad IT Goad: ' + c)
    response.end()
})


server.listen(3003)