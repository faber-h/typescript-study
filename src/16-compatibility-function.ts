/*
 * 함수 타입 호환성
 * 1. "반환 값의 타입" 호환 여부
 * 2. "매개변수 타입" 호환 여부
 * 두 가지 모두 충족되야 함수 호환 가능
 */
// 1. 반환 값의 타입
// 업캐스팅 가능, 다운캐스팅 불가능
type ReturnNumberType = () => number;
type ReturnLiteralType = () => 10;

let returnNumberFunc: ReturnNumberType = () => 10;
let returnLiteralFunc: ReturnLiteralType = () => 10;

returnNumberFunc = returnLiteralFunc;
// returnLiteralFunc = returnNumberFunc; // 오류

// 2. 매개변수 타입
// 업캐스팅 불가능, 다운캐스팅 가능
// 2-1. 매개변수 개수 같을 때
// 2-1-1. 예시1
type ArgNumberType = (value: number) => void;
type ArgLiteralType = (value: 10) => void;

let argNumberFunc: ArgNumberType = (value) => {};
let argLiteralFunc: ArgLiteralType = (value) => {};

// argNumberFunc = argLiteralFunc; // 오류
argLiteralFunc = argNumberFunc;

// 2-1-2. 예시2 - 매개변수 타입이 객체
type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 오류
dogFunc = animalFunc;

// 2-2. 매개변수 개수 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // 오류
