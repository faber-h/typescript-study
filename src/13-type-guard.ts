/*
 * 타입 가드
 * 조건문과 함께 사용해 타입을 좁히는 것
 * 타입 가드 연산자: typeof, instanceof, in
 */
type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  // typeof: 변수가 특정 타입임을 보장
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // instanceof: 내장 클래스 타입을 보장
  else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // in: 직접 만든 타입으로 좁히려면 in 연산자 이용
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}

/*
 * 커스텀 타입 가드
 * 사용자 정의 타입 가드
 * 참 또는 거짓을 반환하는 함수를 이용해 타입을 좁히는 것
 */
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// in 연산자 이용할 경우
// 프로퍼티가 중간에 이름이 수정되거나 추가 또는 삭제될 때
// 타입 가드가 제대로 동작하지 않을 수도 있음
// -> 커스텀 타입 가드 사용 권장
// function warning(animal: Animal) {
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다" : "안짖어요");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
//   }
// }

// 커스텀 타입 가드
// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}
