/*
 * enum 타입
 * 자바스크립트X 타입스크립트O 타입
 */
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

// enum 멤버에 숫자 값을 직접 할당하지 않아도
// 0 부터 1씩 늘어나는 값으로 자동으로 할당
// enum Role {
//   ADMIN, // 0 할당(자동)
//   USER, // 1 할당(자동)
//   GUEST, // 2 할당(자동)
// }

// 값을 변경하고 싶다면 값을 직접 할당
// 할당 이후 1씩 증가된 값으로 자동 할당
// enum Role {
//   ADMIN, // 0 할당(자동)
//   USER = 10, // 10 할당
//   GUEST, // 11 할당(자동)
// }

const user1 = {
  name: "영희",
  role: Role.ADMIN, // 0
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2
};

console.log(user1, user2, user3);
