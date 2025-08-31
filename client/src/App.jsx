import { useState, useEffect } from "react";
import axios from "axios";
import TodoPlanner from "./TodoPlanner";
import Todos from "./Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  // fetch todos from backend
  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/todos");
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // load todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black p-4 min-h-screen">
      {/* pass fetchTodos to TodoPlanner */}
      <TodoPlanner onTodoAdded={fetchTodos} />  
      <Todos todos={todos} />
    </div>
  );
};

export default App;
