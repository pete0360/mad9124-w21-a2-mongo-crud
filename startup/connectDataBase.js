import createDebug from 'debug'
const debug = createDebug('assg02:db')
import mongoose from 'mongoose'

export default () => {
    mongoose
        .connect(`mongodb://localhost:27017/mad9124`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        .then(() => {
            debug(`Connected to MongoDB ...`)   
        })
        .catch(err => {
            debug(`Error connecting to MongoDB ...`, err.message)
            process.exit(1)
        })
    }

