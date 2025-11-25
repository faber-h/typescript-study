/*
 * 조건부 타입
 * 삼항 연산자 조건문 같은 형태
 * SomeType extends OtherType ? TrueType : FalseType;
 */
// 조건식 - 원시 타입
type A = number extends string ? number : string;

// 조건식 - 객체 타입
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/*
 * 조건부 타입 + 제네릭
 * 제네릭과 함께 사용될 때 조건부 타입은 강력한 힘을 갖음
 */
// 조건부 타입 + 제네릭
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // let varA: string
let varB: StringNumberSwitch<string>; // let varB: number

// 조건부 타입 + 제네릭 + 타입 단언
function removeSpaces0<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
    return 0 as any; // 문제 감지 못함
  } else {
    return undefined as any;
  }
}

// 조건부 타입 + 제네릭 + 함수 오버로딩
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi hello"); // let result: string
let result2 = removeSpaces(undefined); // let result2: undefined

/*
 * 분산적인 조건부 타입
 * 타입 변수에 할당한 Union 타입의 모든 타입이 분리되고
 * 분산된 각 타입의 결과를 모아 다시 Union 타입으로 묶임
 */
// 예시1
type NumberStringSwitch<T> = T extends number ? string : number;

let a: NumberStringSwitch<number>; // let a: string
let b: NumberStringSwitch<string>; // let b: number

let c: NumberStringSwitch<number | string>; // let c: string | number
// StringNumberSwitch<number> -> let c: string
// StringNumberSwitch<string> -> let c: number
// 결과 : string | number

// 예시2
let d: NumberStringSwitch<boolean | number | string>; // let d: string | number
// StringNumberSwitch<boolean> -> let d: number
// StringNumberSwitch<number> -> let d: string
// StringNumberSwitch<string> -> let d: number
// 결과 : string | number

// 예시3
type Exclude<T, U> = T extends U ? never : T;

type E = Exclude<number | string | boolean, string>; // type E = number | boolean
// Exclude<number, string> -> type E = number
// Exclude<string, string> -> type E = never
// Exclude<boolean, string> -> type E = boolean
// 결과 : number | never | boolean
// 공집합과 어떤 집합의 합집합은 그냥 원본 집합이 되기 때문에
// 공집합을 의미하는 never 타입은 Union으로 묶일 경우 사라짐
// 최종 결과 : number | boolean

// 예시4
type Extract<T, U> = T extends U ? T : never;

type F = Extract<number | string | boolean, string>; // type F = string
// Extract<number, string> -> type F = never
// Extract<string, string> -> type F = string
// Extract<boolean, string> -> type F = never
// 결과 : never | string
// 공집합과 어떤 집합의 합집합은 그냥 원본 집합이 되기 때문에
// 공집합을 의미하는 never 타입은 Union으로 묶일 경우 사라짐
// 최종 결과 : string

// 분산적인 조건부 타입을 막고 싶으면 대괄호 이용
type Switch<T> = [T] extends [number] ? string : number;

let g: Switch<number | string>; // let g: number
// [number | string] extends [number]

let h: Switch<boolean | number | string>; // let h: number
// [boolean | number | string] extends [number]

/*
 * infer
 * 조건부 타입 내에서 특정 타입 추론
 */
// 예시1
type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;
type FuncB = () => number;

// 조건식을 참으로 만드는 R 타입을 추론 => 참
type ReturnA = ReturnType<FuncA>; // type ReturnA = string
type ReturnB = ReturnType<FuncB>; // type ReturnB = number

// 조건식을 참으로 만드는 R 타입을 추론 불가 => 거짓
type ReturnC = ReturnType<number>; // type ReturnC = never

// 예시2
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // type PromiseA = number
type PromiseB = PromiseUnpack<Promise<string>>; // type PromiseB = string
