import { mongoose } from "mongoose";

const studentSchema = new mongoose.Schema({
    firstName: {type: String,minlength:0, maxlength: 64, required: true},
    lastName: {type: String,minlength:0, maxlength: 64, required: true},
    nickName: {type: String,minlength:0, maxlength: 64, required: false},
    email: {type: String,minlength:0, maxlength: 512, required: true},

})

const courseSchema = new mongoose.Schema({
    code: {type: String,minlength:0, maxlength: 16, required: true},
    title: {type: String,minlength:0, maxlength: 255, required: true},
    description: {type: String,minlength:0, maxlength: 2048, required: false},
    url: {type: String,minlength:0, maxlength: 512, required: false},
    firstName: {type: Array, required: false},

})