import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-200 mb-3 mx-auto">
          THCodeX
        </h1>
      </div>
      <form className="bg-zinc-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold text-gray-600 mb-3">Crea Tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea: "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripción de tu tarea: "
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
