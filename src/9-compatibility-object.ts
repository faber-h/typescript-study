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
