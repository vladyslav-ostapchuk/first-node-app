import express from 'express'


const app = express()
const port = 3000

app.get('/', (req, res) => {
    const a = 4
    if (a > 5) {
        res.send('OK!!!')
    } else {
        res.send('Hello World!!!66!')
    }

})
app.get('/osa', (req, res) => {
    res.send('Hello OSA!!!!')
})
app.post('/osa', (req, res) => {
    res.send('you created OSA!!!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
