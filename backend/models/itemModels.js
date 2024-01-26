import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemSchema = new Schema({
    image: String
})

const itemInfo = mongoose.model('itemInfo', itemSchema)

export default itemInfo