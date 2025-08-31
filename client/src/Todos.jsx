 

const Todos = ({todos}) => {
    
  return (
    <div>
        <h2 className="text-2xl font-bold text-gray-100 text-center mb-2">Your Todos</h2>
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li key={todo.id} className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-100">{todo.title}</h3>
                    <p className="text-gray-400">{todo.description}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todos