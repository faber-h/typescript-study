/*
 * 타입 가드
 * 조건문과 함께 사용해 타입을 좁히는 것
 * 타입 가드 연산자: typeof, instanceof, in
 */
type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  // typeof: 변수가 특정 타입임을 보장
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // instanceof: 내장 클래스 타입을 보장
  else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // in: 직접 만든 타입으로 좁히려면 in 연산자 이용
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
