const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to database")
    } catch (error) {
        console.log("Error connecting to database")
    }
}

module.exports = dbConnect