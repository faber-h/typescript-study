import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// Document.getElementById(elementId: string): HTMLElement | null
// null 오류 해결법 1 - Type Guard
// 가장 안전
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

// null 오류 해결법 2 - Non-null assertion (!)
// “root DOM은 100% 존재한다”고 확신하는 경우
// 편의성이 높지만 위험성 존재
// const rootElement = document.getElementById("root")!;

// null 오류 해결법 3 - as HTMLElement
// 타입 강제 덮어쓰기
// 위험성 높음
// const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
