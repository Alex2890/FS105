import mongoose from "mongoose";
import messagesList from "../models/messageModels.js";


//POST message from frontend contact us page to database

const postMessage = async (req, res) => {

    const { enquirerName, enquirerEmail, subject, message } = req.body

    try {

        if(!enquirerName || !enquirerEmail || !subject || !message){
            
        }


        const response = await messagesList.create({ enquirerName, enquirerEmail, subject, message })

        res.status(200).json({ message: "message sent successfully", response })


    } catch (error) {

        res.status(400).json({ error: error.message })
    }
}


//GET all messages from the database

const getMessages = async (req, res) => {
    try {

        const messages = await messagesList.find({}).sort({ createdAt: -1 })
        res.status(200).json(messages)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}




export { postMessage, getMessages }