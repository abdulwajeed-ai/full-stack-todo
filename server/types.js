const {z} = require("zod")

const createTodo = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    description: z.string().min(5, "Description must be at least 5 characters long"),
})

const updateTodo = z.object({
    title: z.string().min(3, "title must be at least 3 characters long"),
    description: z.string().min(5, "description must be at least 5 characters long"),
})


module.exports = { createTodo, updateTodo }