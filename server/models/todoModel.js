const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;