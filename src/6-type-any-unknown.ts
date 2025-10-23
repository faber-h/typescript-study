/*
 * any 타입
 * 자바스크립트X 타입스크립트O 타입
 * 타입 검사를 받지 않음
 */
// 어떤 타입의 값이든 범용적으로 사용 가능
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = () => {};

// 다양한 타입의 메서드 사용 가능
anyVar.toUpperCase();
anyVar.toFixed();

// 어떤 타입으로 정의된 변수든 할당 가능
let num: number = 10;
num = anyVar;

/*
 * unknown 타입
 * 자바스크립트X 타입스크립트O 타입
 */
// 어떤 타입의 값이든 범용적으로 사용 가능
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "hello";
unknownVar = true;
unknownVar = () => {};

// any 타입과 다르게 다양한 타입의 메서드 사용 불가능
// unknownVar.toUpperCase();
// unknownVar.toFixed();

// any 타입과 다르게 할당 불가능
// num = unknownVar;

// 할당 불가능하지만
// 조건문을 이용해 특정 타입임을 보장할 경우
// 같은 타입 할당 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}
