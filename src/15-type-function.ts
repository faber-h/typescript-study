/*
 * 함수 타입
 */
// 1. 기본
// 1-1. 함수 선언문
function sum1(a: number, b: number): number {
  return a + b;
}
// 반환값 자동 추론 생략 가능
function sum2(a: number, b: number) {
  return a + b;
}
// 매개변수 기본 값 자동 추론 생략 가능
function sum3(a = 10, b: number) {
  // a: number
  return a + b;
}

// 1-2. 화살표 함수
const sum4 = (a: number, b: number): number => a + b;
// 반환값 자동 추론 생략 가능
const sum5 = (a: number, b: number) => a + b;
// 매개변수 기본 값 자동 추론 생략 가능
const sum6 = (a = 10, b: number) => a + b; // a: number

// 2. 선택적 매개변수
// 매개변수 뒤 물음표(?) 붙여 매개변수 생략 가능
// 2-1. 선택적 매개변수 사용 X
function func1(name: string, age: number) {
  console.log(`name : ${name}`);
  console.log(`age : ${age}`);
}
func1("홍길동", 1);
// func1("홍길동") // 오류, 매개변수 age 생략 불가

// 2-2. 선택적 매개변수 사용 O
// 2-2-1. 선택적 매개변수의 타입은 자동으로 undefined와 유니온 된 타입으로 추론
function func2(name: string, age?: number) {
  console.log(`name : ${name}`);
  // age: number | undefined
  console.log(`age : ${age}`);
}
func2("홍길동");
func2("홍길동", 1);

// 2-2-2. 타입 좁히기
function func3(name: string, age?: number) {
  console.log(`name : ${name}`);
  if (typeof age === "number") {
    // age: number
    console.log(`age : ${age}`);
  }
}

// 2-2-3. 선택적 매개변수는 필수 매개변수 앞에 올 수 없음
// function func4(age?: number, name: string) {} // 오류

// 3. 나머지 매개변수
// 3-1. 배열 타입 - 길이 고정 X
function getSum1(...numbers: number[]) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
}
getSum1(1, 2, 3);
getSum1(1, 2, 3, 4);

// 3-2. 튜플 타입 - 길이 고정 O
function getSum2(...numbers: [number, number, number]) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
}
getSum2(1, 2, 3);
// getSum2(1, 2, 3, 4); // 오류
