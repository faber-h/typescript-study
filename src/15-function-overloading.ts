/*
 * 함수 오버로딩
 * 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * 자바스크립트 X
 * 타입스크립트 O
 */
// 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니쳐
// 구현 시그니쳐의 매개변수 타입은 모든 오버로드 시그니쳐와 호환되도록 만들어야 힘
function func(a: number, b?: number, c?: number) {
  // 매개변수가 3개일 때에는 모든 매개변수를 더한 값을 출력
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  }
  // 매개변수가 1개일 때에는 매개변수에 20을 곱한 값을 출력
  else {
    console.log(a * 20);
  }
}
