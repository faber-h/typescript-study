/*
 * 타입 단언
 * 값 as 타입
 * 특정 값을 원하는 타입으로 단언
 */
// 1. 타입 단언 사용
// 1-1. 개발자가 해당 타입에 대해 확신이 있을 때
// 1-2. 자바스크립트 기반 코드에 점진적으로 타입스크립트를 적용할 때
// 자바스크립트 코드
// let person = {};
// person.name = "이름";
// person.age = 1;

type Person = {
  name: string;
  age: number;
};

// 타입스크립트 적용 시 오류 발생
// let person: Person = {}; // 오류 발생
// person.name = "";
// person.age = 23;

// 타입 단언 사용
let person = {} as Person;
person.name = "이름";
person.age = 1;

// 1-3. 초과 프로퍼티 검사를 피할 때
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "이름",
  color: "색",
  breed: "종",
} as Dog;

// 2. 타입 단언의 조건
// 두 조건 중 하나 반드시 만족(A as B)
// 2-1. A가 B의 슈퍼타입
// 2-2. A가 B의 서브타입
let num1 = 10 as never; // A가 B의 슈퍼타입
let num2 = 10 as unknown; // A가 B의 서브타입

// let num3 = 10 as string;  // 오류 발생

// 3. 다중 단언
// 타입 단언은 다중으로 가능
// 왼쪽에서 오른쪽으로 단언이 이뤄짐
// 다른 언어의 타입 캐스팅과 비슷하지만
// 타입 단언은 해당 타입의 값으로 바꾸는 것이 아니라
// 단순 눈속임에 불과하므로 오류가 발생할 확률이 매우 높아짐
// 불가능했던 단언을 가능하도록 만들 수 있지만 주의해야 함
let num3 = 10 as unknown as string;

// 4. const 단언
// 특정 값을 const 타입으로 단언하면 마치 변수를 const로 선언한 것 과 비슷하게 타입이 변경
// 4-1. 원시타입
// 리터럴 타입으로 단언
let num4 = 10 as const; // let num4: 10
// 4-2. 객체타입
// 모든 프로퍼티가 readonly를 갖도록 단언
let cat = {
  name: "이름",
  color: "색",
} as const; // let cat: { readonly name: "이름"; readonly color: "색"; }

// 5. Non Null 단언
// 값 뒤에 느낌표(!)
// 값이 undefined이거나 null이 아닐것으로 단언
type Mail = {
  sender: string;
  title?: string;
};

let mail: Mail = {
  sender: "@",
  title: "메일제목",
};

// const titleLength: number = mail.title.length; // 'mail.title' is possibly 'undefined'. 오류
const titleLength: number = mail.title!.length;
