const mongoose = require('mongoose')

const getDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to database");
    }
    catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = getDB