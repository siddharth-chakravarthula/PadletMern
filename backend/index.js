import express from 'express';
import { PORT, MongoDBURL } from './config.js'
import mongoose from 'mongoose';
import { Post } from './models/postModel.js'
import router from './routes/postsRoute.js'
import cors from 'cors';

const app = express();

// Middleware for parsing req body
app.use(express.json()); // Tested with Desktop Postman App

// Middleware for handling CORS policy
// Option 1: Allow all origins with default of cors()
app.use(cors());

// Option 2: Allow custome origins
// app.use(cors({
    // origin: 'http://localhost:3000',
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type'],
// }))

app.get("/", (req, res) => {
    console.log(req)
    return res.status(234).send("This is my Padlet Clone's server!")
});

app.use('/posts', router)

mongoose.connect(MongoDBURL)
.then(() => {
    console.log("App has connected to MongoDB.")
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}.`);
    }) // Put the .listen method inside the .then method because I only want the server to run if we are connected to MongoDB.
})
.catch((error) => {
    console.log(error)
});