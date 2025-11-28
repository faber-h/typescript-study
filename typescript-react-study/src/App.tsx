import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
// 공통 타입이 필요할 경우
// import 키워드로 불러오기
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const handleClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  const handleClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor handleClickAdd={handleClickAdd}>
        <div>child</div>
      </Editor>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleClickDelete={handleClickDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
