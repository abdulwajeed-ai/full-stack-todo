const todoModel = require("../models/todoModel");
const { createTodo, updateTodo: updateTodoSchema } = require("../types");

// Create a new todo
const todo = async (req, res) => {
  const { title, description } = req.body;
  const parsePayload = createTodo.safeParse({ title, description });
  if (!parsePayload.success) {
    return res.status(411).json({ message: "sent the wrong inputs" });
  }
  try {
    await todoModel.create({ title, description, completed: false });
    res.status(201).json({ message: "todo created successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

// Get all todos
const todos = async (req, res) => {
  try {
    const allTodos = await todoModel.find();
    res.status(200).json(allTodos);
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

// Mark todo as completed
const completed = async (req, res) => {
  const { id } = req.body;
  const parsePayload = updateTodoSchema.safeParse({ id });
  if (!parsePayload.success) {
    return res.status(411).json({ message: "sent the wrong update inputs" });
  }

  try {
    const updated = await todoModel.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await todoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

// Update todo (edit)
const editTodo = async (req, res) => {
  const { id } = req.params;
  const updatePayload = req.body;
  try {
    const updated = await todoModel.findByIdAndUpdate(id, updatePayload, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { todo, todos, completed, deleteTodo, editTodo };
