const { todo, todos, completed, deleteTodo, updateTodo, editTodo } = require("../controllers/todoController");
 
const router = require("express").Router();

// create todo
router.post("/todo", todo)
// get all todos
router.get("/todos", todos)
// update todo
router.put("/todo/:id", editTodo)
// mark todo as completed
router.put("/completed", completed)
// delete todo
router.delete("/todo/:id", deleteTodo)

module.exports = router