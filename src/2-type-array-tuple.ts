/*
 * 배열
 */
// 기본 배열 정의 방법 1: 배열요소타입[] 형식
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["he", "ll", "o"];

// 기본 배열 정의 방법 2: Array<배열요소타입> 형식
let boolArr: Array<boolean> = [true, false];

// 다양한 타입 요소를 갖는 배열 타입 정의: 소괄호와 바(|) 이용
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열 타입 정의: [][] 형식
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

/*
 * 튜플
 * 길이와 타입이 고정된 배열
 * push나 pop을 이용해 고정된 길이를 무시하고 요소를 추가하거나 삭제할 수 있으므로 튜플을 사용할 때 배열 메서드 주의
 */
// 튜플 정의 방법
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 다차원 배열에서 용이
const users: [string, number][] = [
  ["김", 1],
  ["이", 2],
  ["박", 3],
  ["조", 4],
  // [5, "신"], // 오류 발생
];
