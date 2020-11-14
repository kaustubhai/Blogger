const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb://localhost/blogs', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, () => {
            console.log('Database is up')
    })
}

module.exports = connectDB