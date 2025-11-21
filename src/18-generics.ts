/*
 * 제네릭
 * 함수, 인터페이스, 타입 별칭, 클래스 등을
 * 다양한 타입과 함께 동작하도록 만들어 주는 기능
 */

/*
 * 제네릭 함수
 * 모든 타입의 값을 다 적용할 수 있는 범용적인 함수
 * 함수 이름 뒤 꺽쇠<>에 타입을 담는 변수인 타입 변수 T를 선언 후
 * 매개변수와 반환값의 타입을 이 타입변수 T로 설정
 * T에 어떤 타입이 할당될 지는 함수가 호출될 때 결정
 */
function func2<T>(value: T): T {
  return value;
}
let num2 = func2(10); // let num2: number
// num2 = func2("string"); // 오류
// num2.toUpperCase(); // 오류

// 함수가 호출될 때 타입 변수에 할당할 타입을 직접 명시 가능
let arr = func2<[number, number, number]>([1, 2, 3]);

// 다중 타입 변수
function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap("1", 2);

// 배열 타입 변수
function returnFirstValue1<T>(data: T[]) {
  return data[0];
}
let num = returnFirstValue1([0, 1, 2]); // let num: number
let str1 = returnFirstValue1([1, "hello"]); // let str1: string | number;

// rest 파라미터와 타입 변수
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let str2 = returnFirstValue2([1, "hello"]); // let str2: number

// 타입 변수 제한 - extends
// 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한
// 예) length 프로퍼티를 갖는 객체 타입으로 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
getLength("123");
getLength([1, 2, 3]);
getLength({ length: 1 });
// getLength(undefined); // 오류
// getLength(null); // 오류
// getLength(10); // 오류

/*
 * 제네릭 인터페이스, 제네릭 타입 별칭
 * 제네릭 함수는 매개변수에 제공되는 값의 타입을 기준으로 타입 변수의 타입을 추론할 수 있지만
 * 인터페이스와 타입 별칭은 마땅히 추론할 수 있는 값이 없기 때문에
 * 제네릭 함수와는 달리 변수의 타입으로 정의할 때
 * 반드시 꺽쇠와 함께 타입 변수에 할당할 타입을 명시
 */
// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니쳐와 함께 사용
// 유연한 객체 타입을 정의
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

/*
 * 제네릭 클래스
 * 클래스는 생성자를 통해 타입 변수의 타입을 추론할 수 있기 때문에
 * 생성자에 인수로 전달하는 값이 있을 경우 타입 변수에 할당할 타입을 생략 가능
 */
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2", "3"]);
