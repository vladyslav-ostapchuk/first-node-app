const db = require('../db')

class PostController {
    async createPost(req, res) {
        const { title, content, userId } = req.body
        // console.log(name, surname)
        // res.json('ok') 
        const newPost = await db.query(`INSERT INTO person (title, content,user_id) values ($1, $2,$3) RETURNING *`, [title, content, user_id])

        res.json(newPost.rows[0])
    }

    async getUsers(req, res) {
        const id = req.query.ids
        const posts = await db.query(`SELECT*FROM post where user_id = $1`[id])
        res.json(posts.rows)
    }
}

module.exports = new PostController()