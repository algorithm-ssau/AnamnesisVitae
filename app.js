const express = require("express")
const config = require("config")
const mongoose = require("mongoose")

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth',require('./routes/auth.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewURlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT,()=>console.log(`has been started...on ${PORT}`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

