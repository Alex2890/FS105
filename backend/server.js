import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import itemInfo from './models/itemModels.js';
import messagesRouter from './routes/messageRoutes.js'
import productsRouter from './routes/productRoutes.js'

dotenv.config()

const app = express()


// app.get('/', (req, res) => {
//   res.send('Hello World!!!')
// })


//neccessary to have if post and patch requests are needed fyi Rid
app.use(express.json())

app.use(cors())


// all the magic happen below
// ----------------------------------------------------------------------------------------------------
app.use('/api/users', userRouter)
app.use('/api/messages', messagesRouter)
app.use('/api/products', productsRouter)
// ----------------------------------------------------------------------------------------------------

//for images on the product page front end
app.use(express.static('public'))

//upload image------------------------------------------------------------------------------------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})


app.post('/upload', upload.single('file'), async (req, res) => {
    console.log(req.file)

    const { bagName, price, description, numberOfStocks } = req.body

    try {
        const item = await itemInfo.create({ image: req.file.filename, bagName, price, description, numberOfStocks })
        console.log(item)
        res.status(200).json({ message: "registered item successfully", item });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }


})
// --------------------------------------------------------------------------------------------------------

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server and DB is running on port`, process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    })
