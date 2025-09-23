import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils.js";

export const TodoList = () => {
  const [todos, setTodos] = useState({
    id: 1,
    text: "Learn React",
    time: "8.00 AM",
    completed: false,
  });

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
        "min-h-[550px] bg-card/50 backdrop-blur-sm place-self-center p-6 w-11/12 max-w-md flex flex-col rounded-lg shadow-xm mx-auto"
      )}
    >
      <h1 className="font-bold text-3xl mt-6">To-Do List</h1>

      <div className="flex justify-between bg-white/50 backdrop-blur-sm items-center mt-4 gradient-border rounded-full gap-2">
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          type="text"
          className="py-3 px-4 text-foreground w-full focus:outline-none"
          placeholder="Add Your Task..."
        />

        <button
          type="button"
          className="px-4 py-3 rounded-full flex items-center gap-1 bg-indigo-500"
        >
          Add <Plus className="h-5 w-5" />
        </button>
      </div>

      {/* todo list */}

      <div className="mt-5 bg-card/0 place-self-center p-6 rounded-lg border w-full">
        card
      </div>
    </div>
  );
};
