/*
 * void 타입
 * 자바스크립트X 타입스크립트O 타입
 * 아무런 값도 없음을 의미
 */
function func1(): void {
  console.log("hello");
}

// 변수의 타입을 void로 정의하면 undefined만 담을 수 있음
let a: void = undefined;
// 단, strictNullChecks가 false일 경우 null도 가능
//a = null;

/*
 * never 타입
 * 자바스크립트X 타입스크립트O 타입
 * 보통 함수가 어떠한 값도 반환할 수 없는 상황에
 * 해당 함수의 반환값 타입을 정의할 때 사용
 */
// 무한 루프
function func2(): never {
  while (true) {}
}

// 의도적 에러 발생
function func3(): never {
  throw new Error();
}

// 어떤 타입도 담을 수 없음
let b: never;
// b = undefined;
// b = null;
