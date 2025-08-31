import { useForm } from "react-hook-form";

const TodoPlanner = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // handle form data here
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-gray-100 text-center mb-2">Add Todo</h2>
        <input
          className="bg-gray-900 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <input
          className="bg-gray-900 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          type="text"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <button
          className="mt-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold py-3 rounded-lg shadow-md hover:from-gray-600 hover:to-black transition"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoPlanner;
