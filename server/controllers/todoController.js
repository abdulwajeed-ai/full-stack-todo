const {createTodo, updateTodo} = require("../types")


const todo = (req, res) =>{
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        return res.status(411).json({message: "sent the wrong inputs"})
    }
}
const todos = (req, res)=>{

}
const completed = (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload)
    if(!parsePayload.success){
        return res.status(411).json({message: "sent the wrong update inputs"})
    }
}

module.exports = {todo, todos, completed}