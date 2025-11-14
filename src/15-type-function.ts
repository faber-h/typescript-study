/*
 * 함수 타입
 */
// 기본
function sum1(a: number, b: number): number {
  return a + b;
}
// 반환값 자동 추론 생략 가능
function sum2(a: number, b: number) {
  return a + b;
}

// 화살표 함수
const sum3 = (a: number, b: number): number => a + b;
const sum4 = (a: number, b: number) => a + b;
