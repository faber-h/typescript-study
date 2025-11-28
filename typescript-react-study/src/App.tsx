import { useRef, useReducer } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
// 공통 타입이 필요할 경우
// import 키워드로 불러오기
import { Todo } from "./types";

// useReducer: 액션 타입을 서로소 유니언으로 정의해 타입 안전성을 확보
// 액션별 구조가 명확해져 타입 기반 오류(예: type 오타)를 방지
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      data: {
        id: number;
      };
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.data.id);
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const handleClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const handleClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      data: {
        id: id,
      },
    });
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
