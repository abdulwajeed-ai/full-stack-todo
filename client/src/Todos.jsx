import { useState } from "react";
import axios from "axios";

const Todos = ({ todos, fetchTodos }) => {
  const [loading, setLoading] = useState(false);

  // ✅ Mark as completed
  const handleComplete = async (id) => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:5000/api/todos/${id}`, {
        completed: true,
      });
      fetchTodos(); // refresh todos after update
    } catch (err) {
      console.error("Error completing todo:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Edit
  const handleEdit = async (id) => {
    const newTitle = prompt("Enter new title:");
    const newDescription = prompt("Enter new description:");

    if (!newTitle || !newDescription) return;

    try {
      setLoading(true);
      await axios.put(`http://localhost:5000/api/todos/${id}`, {
        title: newTitle,
        description: newDescription,
      });
      fetchTodos();
    } catch (err) {
      console.error("Error editing todo:", err);
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-100 text-center mb-2">
        Your Todos
      </h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                {todo.title}
              </h3>
              <p className="text-gray-400">{todo.description}</p>
              {todo.completed && (
                <p className="text-green-400 font-semibold">✅ Completed</p>
              )}
            </div>
            <div className="flex gap-3">
              {!todo.completed && (
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="text-white bg-green-500 px-3 py-2 rounded cursor-pointer"
                  disabled={loading}
                >
                  Completed
                </button>
              )}
              <button
                onClick={() => handleEdit(todo.id)}
                className="text-white bg-yellow-500 px-3 py-2 rounded cursor-pointer"
                disabled={loading}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-white bg-red-500 px-3 py-2 rounded cursor-pointer"
                disabled={loading}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
