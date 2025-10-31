/*
 * 타입 추론
 * 타입이 정의되어 있지 않은 경우
 * 타입을 추론
 */
// 1. 타입 추론 가능
// 1-1. 변수 선언
// 초기값을 기준으로 타입 추론
// 1-1-1. let의 경우
let a = 10; // let a: number
let b = "hi"; // let b: string
let c = {
  id: 1,
  name: "name",
}; // let c: { id: number; name: string; }
let { id, name } = c; // let id: number, let name: string
let [d, e, f] = [1, "hi", true]; // let d: number, let e: string, let f: boolean
let arr = [1, "string"]; // let arr: (string | number)[]
// 1-1-2. const의 경우
// 상수는 초기화된 값을 변경할 수 없기 때문에
// 가장 좁은 타입인 리터럴 타입으로 추론
const g = 10; // const g: 10
const h = "hi"; // const h: "hi"

// 1-2. 함수의 반환값
// return 문을 기준으로 타입 추론
function func1() {
  return "hi";
} // function func1(): string

// 1-3. 기본값이 설정된 매개변수
// 기본값을 기준으로 타입 추론
function func2(message = "hello") { // (parameter) message: string
  return "hi";
} // function func2(): string


// 2. 자동 추론 불가능
// 암시적으로 any 타입이 추론
// 함수의 매개변수 타입
// 타입스크립트 옵션 strict가 true일 때는 실행 전 오류 발생
function func(param) {} // function func(param: any): void


// 3. 주의해야 할 상황
// 3-1. any의 진화
// 3-1-1. 타입스크립트 옵션 strict가 true일 때
// 변수를 선언할때 초기값을 생략하면
// 암시적으로 추론된 any 타입은
// 코드의 흐름에 따라 타입이 계속 변화
// 3-1-2. 타입스크립트 옵션 strict가 false일 때
// 계속 any로 추론되고 타입이 진화하지 않음
let i; // let i: any
i = 10; // let i: any
i.toFixed(); // let i: number // strict가 false일 때 let i: any

i = "hello"; // let i: any
i.toUpperCase(); // let i: string // strict가 false일 때 let i: any
i.toFixed(); // strict가 true일 때 실행 전 오류 // strict가 false일 때 실행 후 오류
