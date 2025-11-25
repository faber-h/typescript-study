/*
 * Partial<T>
 * 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/*
 * Required<T>
 * 필수의, 필수적인
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 * -? 는 ?가 붙어있는 선택적 프로퍼티가 있으면 ?를 제거하라는 의미
 */
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/*
 * Readonly<T>
 * 읽기 전용 수정 불가
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// readonlyPost.content = "수정"; // 오류

/*
 * Pick<T, K>
 * 뽑다, 고르다
 * 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};

/*
 * Omit<T, K>
 * 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Omit<T, K extends keyof T> = {
  [key in Exclude<keyof T, K>]: T[key];
};

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/*
 * Record<T, K>
 * 동일한 패턴을 갖는 객체 타입을 쉽게 정의할 수 있음
 * 첫 번째 변수로 객체의 property를 union으로 받고
 * 두 번째 변수로 property 키의 value 타입을 받아
 * 객체 타입을 만들어주는 타입
 */
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;

/*
 * Exclude<T, U>
 * 제외하다, 추방하다
 * T에서 U를 제거하는 타입
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, string>; // type A = boolean

/*
 * Extract<T, U>
 * 추출하다, 뽑다
 * T에서 U를 추출하는 타입
 */
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, string>; // type B = string

/*
 * ReturnType<T>
 * 함수의 반환 값 타입을 추출하는 타입
 */
type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // type ReturnA = string
type ReturnB = ReturnType<typeof funcB>; // type ReturnB = number
