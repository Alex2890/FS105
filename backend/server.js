import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import cors from 'cors';


dotenv.config()

const app = express()


// app.get('/', (req, res) => {
//   res.send('Hello World!!!')
// })


//neccessary to have if post and patch requests are needed fyi Rid
app.use(express.json())

app.use(cors())

app.use('/api/users', userRouter )



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server and DB is running on port`, process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    })
