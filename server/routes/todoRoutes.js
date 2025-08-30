const { todo, todos, completed } = require("../controllers/todoController");

const router = require("express").Router();

router.post("/todo", todo)
router.get("/todos", todos)
router.put("/completed", completed)

module.exports = router