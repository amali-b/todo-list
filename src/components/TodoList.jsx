import { Check, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils.js";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      time: "8.00 AM",
      completed: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState();

  // define function to add todo

  const addTodo = () => {
    if (newTodo.trim() == "") return;

    const currentDate = new Date();
    const timeString = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const dateString = currentDate.toLocaleDateString();

    setTodos([
      {
        id: Date.now(),
        text: newTodo,
        time: `${timeString}, ${dateString}`,
        completed: false,
      },
      ...todos,
    ]);

    setNewTodo("");
  };

  // define function to add todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div
      className={cn(
        "min-h-[550px] bg-card/40 backdrop-blur-sm place-self-center p-6 w-11/12 max-w-md flex flex-col rounded-lg shadow-md mx-auto"
      )}
    >
      <h1 className="font-bold text-4xl mt-3 text-white">To-Do List</h1>

      <div className="flex justify-between bg-white/50 backdrop-blur-sm items-center mt-4 border rounded-full gap-2">
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          type="text"
          className="py-3 px-4 w-full focus:outline-none font-semibold text-foreground"
          placeholder="Add New Task..."
        />

        <button
          onClick={addTodo}
          type="button"
          className="px-4 py-3 rounded-full flex items-center gap-1 bg-purple-500/80 text-white font-semibold cursor-pointer "
        >
          Add <Plus className="h-5 w-5 font-bold" />
        </button>
      </div>

      {/* todo list */}
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="mt-5 bg-white/50 p-6 rounded-xl w-full backdrop-blur-sm"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-3">
                <button
                  className={cn(
                    "mt-1 p-2 rounded-full flex items-start backdrop-blur-sm border border-border",
                    todo.completed ? "bg-purple-500 text-white" : "bg-white/50"
                  )}
                  onClick={() => toggleComplete(todo.id)}
                >
                  {todo.completed && <Check size={12} />}
                </button>
                <div>
                  <p
                    className={cn(
                      "font-medium",
                      todo.completed ? "text-purple-600" : "text-gray-800 "
                    )}
                  >
                    {todo.text}
                  </p>
                  <p className="text-xs text-fuchsia-900/80 mt-1">
                    {todo.time}
                  </p>
                </div>
              </div>
              <button
                className={cn(
                  "p-2 rounded-lg bg-purple-500/80 text-white font-semibold cursor-pointer backdrop-blur-sm border border-border",
                  "hover:scale-120 hover:bg-white hover:text-purple-700/80 transition-transform duration-300"
                )}
                onClick={() => deleteTodo(todo.id)}
              >
                <Trash size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
