const todoModel = require("../models/todoModel");
const { createTodo, updateTodo } = require("../types");

const todo = async (req, res) => {
  const { title, description } = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
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
const todos = async (req, res) => {
  try {
    const allTodos = await todoModel.find();
    res.status(200).json(allTodos);
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};
const completed = async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    return res.status(411).json({ message: "sent the wrong update inputs" });
  }

  try {
    await todoModel.update({
        _id: req.body._id
    })
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { todo, todos, completed };
