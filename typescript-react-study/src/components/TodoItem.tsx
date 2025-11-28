import { Todo } from "../types";

// 기존 타입 구조를 그대로 전달받아야 할 경우
// extends 키워드로 확장
interface Props extends Todo {
  handleClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const handleClickButton = () => {
    props.handleClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번: {props.content}
      <button onClick={handleClickButton}>삭제</button>
    </div>
  );
}
