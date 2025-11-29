import React, { useRef, useReducer, useContext } from "react";
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

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  handleClickAdd: (text: string) => void;
  handleClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext error");
  return dispatch;
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
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{handleClickAdd, handleClickDelete}}
        >
          <Editor>
            <div>child</div>
          </Editor>
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
