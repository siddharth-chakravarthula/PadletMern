import express from 'express'
import { Post } from '../models/postModel.js'

const router = express.Router();

// New route to save a book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.content)  {
            return res.status(400).send({
                message: "Send all required fields: title, author, and content" // To check if all of the fields have been checked.
            })
        }
        const newPost = {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content
        }
        const post = await Post.create(newPost);

        return res.status(201).send(post)
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
});

// Route for GET all posts from database
router.get('/', async (req, res) => {
    try { // Different method from the POST request
        const posts = await Post.find({});
        return res.status(200).json({
            count: posts.length,
            data: posts // Could have just returned the post in JSON, but also wanted to get the posts.length
        });
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

// Route to GET one post from the database
router.get('/:id', async (req, res) => {
    try { // Different method from the POST request
        const { id } = req.params;
        const post = await Post.findById(id);
        return res.status(200).json(post);
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

// Route to UPDATE a post
router.put('/:id', async (req, res) => {
    try{
        if (!req.body.title || !req.body.author || !req.body.content) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, content'
            })
        }
        const { id } = req.params; // Params required to get specific ID of the item
        const result = await Post.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'Post not found' })
        }
        return res.status(200).send({ message: 'Post updated successfully' })
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).send({ message: error.message })
    }
})

// Route for DELETE a post
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params; // Will always need ID for a single post method
        const result = await Post.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Post not found' })
        }
        return res.status(200).send({ message: "Post deleted successfully" })
    }
    catch (error) { 
        console.log(error.message)
        return res.status(500).send({ message: error.message })
    }
});

export default router;