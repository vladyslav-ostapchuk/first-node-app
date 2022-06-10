import Router from 'express'
// import Post from './Post.js';
import PostController from './PostController.js'

const router = new Router()

router.post('/posts', PostController.create
    // async (req, res) => {     // у routes
    // res.send('Hello World!')
    // try {     
    //     const { author, title, content, picture } = req.body
    //     const post = await Post.create({ author, title, content, picture })
    //     res.json(post)
    // } catch (e) {
    //     res.status(500).json(e)}
    // }
)

router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)


export default router











// async update(req, res) {
//     try {
//         const post = req.body
//         if (!post._id) {
//             res.status(400).json({ message: 'id undefined!!!' })
//         }
//         const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
//         return res.json(updatedPost)
//     } catch (e) {
//         res.status(500).json(e)
//     }
// }

// async delete(req, res) {
//     try {
//         const { id } = req.params
//         if (!id) {
//             res.status(400).json({ message: 'id undefined!!!' })
//         }
//         const post = await Post.findByIdAndDelete(id);
//         return res.json(post)
//     } catch (e) {
//         res.status(500).json(e)
//     }
// }