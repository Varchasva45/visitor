const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')
const View = require('./models/View')
const port = 3000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {  
    return res.status(200).send('Server is up and running')
})

app.post('/visitor', async (req, res) => {
    try {
        const newView = await View.create({})
        return res.status(201).json({message: 'New View Created', newView})
    } catch (error) {
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

app.listen(3000, () => {
    console.log(`Server is listening on Port ${port}`)
});

mongoose.connect('mongodb+srv://varchasva15:varchasva9548362675@prateekswebsite.fkdnt.mongodb.net/views', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});