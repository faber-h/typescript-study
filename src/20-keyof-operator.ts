/*
 * keyof 연산자
 * 객체 타입으로부터 프로퍼티의 모든 key들을 String Literal Union 타입으로 추출하는 연산자
 */
// 1. keyof + 타입
// 프로퍼티의 타입이 수정되어도 자동으로 변경된 타입 추측
interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "이름",
  age: 1,
};

// 2. typeof와 함께 사용
// 2-1. typeof를 타입 정의할 때 사용하면 특정 변수의 타입을 추론
const person2 = {
  name: "이름",
  age: 1,
};

type Person2 = typeof person2; // type Person2 = { name: string; age: number; }

// 2-2. typeof + keyof
function getPropertyKey2(person: Person2, key: keyof typeof person2) {
  return person[key];
}
