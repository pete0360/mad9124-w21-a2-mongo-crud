// Don't forget to use NPM to install Express and Mongoose.
'use strict'

import morgan from 'morgan'
import express from 'express'
// import sanitizeBody from './middleware/sanitizeBody' //need to put in 
import sanitizeMongo from 'express-mongo-sanitize'
import connectDatabase from './startup/connectDataBase.js'
connectDatabase()

import connectStudents from './routes/students.js'
import connectCourses from './routes/courses.js'

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(sanitizeMongo())

app.use('/api/students', connectStudents())
app.use('/api/courses', connectCourses())


export default app