/*
 * 타입 간의 호환성
 */
// Unknown 타입
function unknownExam() {
  let unknownVar1: unknown = 10;
  let unknownVar2: unknown = "abc";

  // 호환 불가능
  //let num: number = unknownVar1;
  //let str: string = unknownVar2;
}

// Never 타입
function neverExam() {
  function neverFunc(): never {
    throw new Error();
  }

  let neverVar: never;

  let num: number = 10;
  let str: string = "abc";

  // 호환 불가능
  // neverVar = num;
  // neverVar = str;

  // 호환 가능
  num = neverFunc();
  num = neverVar;
  str = neverFunc();
  str = neverVar;
}

// Void 타입
function voidExam() {
  function voidFucn(): void {
    console.log("Hello");
  }

  let voidVar: void;

  let num: number = 10;
  let str: string = "abc";

  // 호환 가능
  let unknownVar: unknown = voidFucn();
  let anyVar: any = voidFucn();
  voidVar = undefined;

  // 호환 불가능
  // voidVar = num;
  // voidVar = str;
  // num = voidFucn();
  // num = voidVar;
  // str = voidFucn();
  // str = voidVar;
  // let undefinedVar: undefined = voidFucn();
}

// Any 타입
function AnyExam() {
  let anyVar1: any = 10;
  let anyVar2: any = "abc";

  let num: number = 10;
  let str: string = "abc";
  let neverVar: never;

  // 모두 호환 가능
  anyVar1 = neverVar;
  anyVar2 = neverVar;
  anyVar1 = num;
  anyVar2 = num;
  anyVar1 = str;
  anyVar2 = str;
  num = anyVar1;
  num = anyVar2;
  str = anyVar1;
  str = anyVar2;

  // 단, never 타입에 any 타입 할당 불가능
  // neverVar = anyVar1;
  // neverVar = anyVar2;
}

/*
 * 객체 타입 호환성
 */
type Animal = {
  name: string;
  age: number;
};

type Dog = {
  name: string;
  age: number;
  color: string;
};

let animal: Animal = {
  name: "호랑이",
  age: 1,
};

let dog: Dog = {
  name: "강아지",
  age: 2,
  color: "하양",
};

// 호환 가능
animal = dog;

// 호환 불가능
// dog에는 color라는 추가 프로퍼티가 존재하기 때문에 호환X
// dog = animal;

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
type Animal2 = {
  name: string;
};
type Dog2 = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal2) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog2) => {
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
