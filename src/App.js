import "./App.css";
import InputList from "./components/InputList";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <InputList />
      <TodoList />
    </div>
  );
}

export default App;
