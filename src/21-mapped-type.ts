/*
 * 맵드 타입
 * 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
 */
interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입이 필요한 상황 1
// 기존 객체 타입 사용할 경우 특정 프로퍼티만 고를 수 없음
// 예) 매개변수에 User 타입 사용
// => 수정하고 싶은 프로퍼티만 고를 수 없음
function updateUser1(user: User) {}

// updateUser1({
//   age: 2,
// });

// 맵드 타입이 필요한 상황 2
// 기존 객체 타입과 키워드만 다른 타입을 만들 경우 중복된 프로퍼티가 정의됨
// 예) 매개변수에 PartialUser 타입 사용
// 수정하고 싶은 프로퍼티만 전달 가능하지만
// => User 타입과 PartialUser 타입이 중복된 프로퍼티를 정의
interface PartialUser2 {
  id?: number;
  name?: string;
  age?: number;
}

function updateUser2(user: PartialUser2) {}

updateUser2({
  age: 2,
});

// 맵드 타입
// 인터페이스 불가, 타입 별칭만 가능
// 중복 없이 기존 타입을 변환
// type PartialUser3 = {
//   [key in "id" | "name" | "age"]: User[key];
// };
// 일괄적으로 키워드 적용
type PartialUser3 = {
  [key in "id" | "name" | "age"]?: User[key];
};
type BooleanUser3 = {
  [key in "id" | "name" | "age"]: boolean;
};
type ReadonlyUser3 = {
  readonly [key in "id" | "name" | "age"]: User[key];
};

function updateUser3(user: PartialUser3) {}

updateUser3({
  age: 2,
});

// 맵드 타입 + keyof 연산자
type PartialUser4 = {
  [key in keyof User]?: User[key];
};
type BooleanUser4 = {
  [key in keyof User]: boolean;
};
type ReadonlyUser4 = {
  readonly [key in keyof User]: User[key];
};
