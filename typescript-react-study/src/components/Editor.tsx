import { useState, ReactElement } from "react";

// 컴포넌트가 부모로부터 받는 props의 타입 정의
interface Props {
  // 부모 컴포넌트에서 전달받는 함수 타입 지정
  handleClick: (text: string) => void;

  // children 타입 지정
  // 하나의 React 요소만 자식으로 받을 경우 ReactElement 사용
  // 여러 개의 자식을 받을 수 있도록 하려면 ReactNode를 사용 가능
  children: ReactElement;
}

export default function Editor(props: Props) {
  // useState: 제네릭, 기본적으로 초기값을 보고 타입을 추론
  // 괄호를 비워두면 초기값이 없으므로 undefined로 추론
  // 제네릭을 직접 지정하면(useState<string>()) 해당 타입 + undefined 로 추론(string | undefined)
  // 가능하면 초기값을 넣어서 명확하게 타입을 추론시키는 것이 가장 권장
  const [text, setText] = useState("");

  // 이벤트 핸들러 타입: React가 넘겨주는 이벤트 타입을 사용
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClickButton = () => {
    props.handleClick(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={handleClickButton}>추가</button>
    </div>
  );
}
