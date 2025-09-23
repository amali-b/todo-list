import { ThemeToggle } from "./components/ThemeToggle";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="py-30 min-h-screen bg-background overflow-x-hidden">
      {/* ThemeToggle */}
      <ThemeToggle />

      {/* Main */}
      <TodoList />

      {/* Footer */}
    </div>
  );
}

export default App;
