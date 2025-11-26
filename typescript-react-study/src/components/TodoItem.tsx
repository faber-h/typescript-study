import { Todo } from "../types";

// 기존 타입 구조를 그대로 전달받아야 할 경우
// extends 키워드로 확장
interface Props extends Todo {}

export default function TodoItem(props: Props) {
  return (
    <div>
      {props.id}번: {props.content}
    </div>
  );
}
