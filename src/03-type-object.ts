/*
 * 객체
 */
// 객체 정의 방법 1: object
let user1: object = {
  id: 1,
  name: "홍길동",
};
// 타입스크립트의 object 타입은 단순 값이 객체임을 표현하는 것 외에는
// 아무런 정보도 제공하지 않기 때문에
// 프로퍼티에 접근하려고 하면 오류가 발생
// user1.id; // 오류 발생

// 객체 정의 방법 2: 객체 리터럴
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};
user2.id;

// 선택적 프로퍼티(Optional Property)
let user3: {
  id?: number; // 선택적 프로퍼티
  name: string;
} = {
  id: 1,
  name: "홍길동",
};
user3 = {
  name: "홍길동",
};

// 읽기전용 프로퍼티(Readonly Property)
let user4: {
  id?: number;
  readonly name: string; // 읽기전용 프로퍼티
} = {
  id: 1,
  name: "홍길동",
};
// user4.name = "abc"; // 오류 발생
