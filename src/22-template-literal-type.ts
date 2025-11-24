/*
 * 템플릿 리터럴 타입
 * 템플릿 리터럴을 이용해 특정 패턴을 갖는 String 타입을 만드는 타입
 */
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal1 =
  | `red-dog`
  | "red-cat"
  | "red-chicken"
  | `black-dog`
  | "black-cat"
  | "black-chicken"
  | `green-dog`
  | "green-cat"
  | "green-chicken";

// 타입 조합할 경우 사용
type ColoredAnimal2 = `${Color}-${Animal}`;
