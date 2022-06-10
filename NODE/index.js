import express from 'express';
import mongoose from 'mongoose';
// import Post from './Post.js';
import router from './router.js';
import fileUpload from 'express-fileupload';

const app = express()
const port = 3000
const DB_URL = `mongodb+srv://1111:1111@cluster0.lgr3vcc.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json())
// app.post('/', async (req, res) => {
//     // res.send('Hello World!')
//     try {
//         const { author, title, content, picture } = req.body
//         const post = await Post.create({ author, title, content, picture })
//         res.json(post)
//     } catch (e) {
//         res.status(500).json(e)
//     }

// })
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(port, () => console.log(`Example app listening on port ${port}`))

    } catch (e) {
        console.log(e)
    }
}


startApp()