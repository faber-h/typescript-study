/*
 * 대수 타입
 * 여러 타입을 합성하여 새로운 타입을 만드는 것
 * Union 타입, Intersection 타입
 */

/*
 * 1. Union 타입
 * 여러 타입 중 '하나' 이상의 값을 가질 수 있는 타입
 */
// 원시 타입
let a: number | string;
a = 1;
a = "hello";

// 배열 타입
let b: (number | string)[] = [2, "hi"];

// 객체 타입
type Animal = {
  name: string;
  color: string;
};
type Items = {
  item: string;
  condition: string;
};

type UnionType1 = Animal | Items;

let union1: UnionType1 = {
  name: "Animal 프로퍼티",
  color: "Animal 프로퍼티",
  item: "Person 프로퍼티",
  condition: "Person 프로퍼티",
};
let union2: UnionType1 = {
  name: "Animal 프로퍼티",
  color: "Animal 프로퍼티",
};
let union3: UnionType1 = {
  item: "Person 프로퍼티",
  condition: "Person 프로퍼티",
};
// 어떤 객체 타입도 만족하지 않는 경우는 불가능
// let union4: UnionType1 = {
//   name: "Animal 프로퍼티",
//   condition: "Person 프로퍼티",
// };

// 공통 프로퍼티가 있는 객체 타입
type Person = {
  name: string;
  job: string;
};

type UnionType2 = Animal | Person;

let union5: UnionType2 = {
  name: "합집합",
  color: "Animal 프로퍼티",
  job: "Person 프로퍼티",
};
let union6: UnionType2 = {
  name: "합집합",
  color: "Animal 프로퍼티",
};
let union7: UnionType2 = {
  name: "합집합",
  job: "Person 프로퍼티",
};
// 어떤 객체 타입도 만족하지 않는 경우는 불가능
// let union8: UnionType2 = {
//   name: "합집합",
// };

/*
 * 2. Intersection 타입
 * 여러 타입의 모든 속성을 포함하는 타입
 */
// 원시 타입
let c: number & string; // let c: never; 과 같음

// 배열 타입
let d: (number & string)[]; // let d: never; 과 같음

// 객체 타입
type IntersectionType = Animal & Person;

let intersection1: IntersectionType = {
  name: "교집합",
  color: "Animal 프로퍼티",
  job: "Person 프로퍼티",
};
// 모든 속성을 포함하지 않는 경우는 불가능
// let intersection2: IntersectionType = {
//   name: "교집합",
//   color: "Animal 프로퍼티",
// };
// let intersection3: IntersectionType = {
//   name: "교집합",
//   job: "Person 프로퍼티",
// };
// let intersection4: IntersectionType = {
//   name: "교집합",
// };
