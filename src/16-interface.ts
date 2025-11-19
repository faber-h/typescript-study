/*
 * 인터페이스
 * 객체 타입을 정의하는 문법
 * 객체의 구조를 정의하는데 특화
 * 상속, 합침 등의 기능 제공
 */
// 1. 타입 별칭과 동일 기능
// 1-1. 선택적 프로퍼티, 읽기 전용 프로퍼티 가능
interface Person {
  readonly name: string;
  age: number;
  country?: string;
}

// 1-2. 메서드 타입 정의
// 1-2-1. 함수 타입 표현식
interface Person {
  sayHi: () => void;
  // 메서드 오버로딩 불가능
  // sayHi: (a: number, b: number) => void;
}
// 1-2-2. 호출 시그니쳐
interface Person {
  sayHello(): void;
  // 메서드 오버로딩 가능
  sayHello(a?: number): void;
}

const person: Person = {
  name: "이름",
  age: 1,
  sayHi: function () {
    console.log("Hi");
  },
  sayHello: function (a?: number) {
    if (typeof a === "number") {
      console.log(a);
    } else {
      console.log("Hello");
    }
  },
};

// person.name = "홍길동"; // 오류
person.sayHi();
person.sayHello();
person.sayHello(1);

// 1-2-3. 하이브리드 타입
interface Func2 {
  (a: number): string;
  b: boolean;
}

const func: Func2 = (a) => "hello";
func.b = true;

// 2. 타입 별칭과 차이점
// 2-1. 유니온, 인터섹션 타입 불가능
// interface Type3 = number | string;
// interface Type4 = number & string;

// 2-2. 유니온, 인터섹션으로 이용해야 한다면
// 2-2-1. 타입 별칭과 함께 사용
interface Animal {
  name: string;
}
type Type1 = number | string | Animal;
type Type2 = number & string & Animal;

// 2-2-2. 타입 주석에서 직접 사용
const animal: Animal | string = {
  name: "홍길동",
};

// 3. 고유 기능
// 3-1. 확장
// 3-1-1. 프로퍼티 상속
// interface A extends B
interface Animal1 {
  name: string;
  color: string;
}
interface Dog1 extends Animal1 {
  breed: string;
}
interface Dog2 extends Animal1 {
  breed: string;
}

// 3-1-2. 프로퍼티 재정의
// 단, 원본 타입을 A, 재정의된 타입을 B라고 하면 반드시 A가 B의 슈퍼 타입
interface Animal2 {
  name: string;
  color: string;
}

interface Dog2 extends Animal2 {
  name: "dog"; // 타입 재정의
  breed: string;
}

// 3-1-3. 타입 별칭도 확장 가능
type Animal3 = {
  name: string;
  color: string;
};
interface Cat1 extends Animal3 {
  isScratch: boolean;
}
interface Cat2 extends Animal3 {
  isScratch: boolean;
}

// 3-1-4. 다중 확장
interface Animal4 {
  name: string;
  color: string;
}

interface Dog extends Animal4 {
  breed: string;
}

interface Cat extends Animal4 {
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};

// 3-2. 선언 병합
// 동일한 이름의 인터페이스들이 합쳐지는 것
interface Book {
  name: string;
}

interface Book {
  author: string;
}

const book: Book = {
  name: "책",
  author: "저자",
};

// 프로퍼티 이름이 동일할 경우 양방향 호환 가능한 타입만 병합 가능
// interface Book {
//   name: "책";
//   author: number;
// }
