import { useState } from "react";
import "./App.css";

function App() {
  // useState: 제네릭, 기본적으로 초기값을 보고 타입을 추론
  // 괄호를 비워두면 초기값이 없으므로 undefined로 추론
  // 제네릭을 직접 지정하면(useState<string>()) 해당 타입 + undefined 로 추론(string | undefined)
  // 가능하면 초기값을 넣어서 명확하게 타입을 추론시키는 것이 가장 권장
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Todo</h1>
    </div>
  );
}

export default App;
