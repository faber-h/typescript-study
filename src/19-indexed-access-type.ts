/*
 * 인덱스드 엑세스 타입
 * 인덱스를 이용해 다른 타입내의 특정 프로퍼티의 타입을 추출
 * 객체, 배열, 튜플에 사용
 */
// 1. 객체
// 1-1. 객체 타입[String Literal 타입]
// 프로퍼티의 타입이 수정되어도 자동으로 변경된 타입 추측
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

// Post.author: { id: number; name: string; }
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이름",
  },
};

// 1-2. 주의1: 인덱스에 들어가는 문자열은 값이 아니라 타입
// const authorKey = "author";
// function printAuthorInfo(author: Post[authorKey]) {} // 오류

// 1-3. 주의2: 인덱스에 존재하지 않는 프로퍼티 이름 불가
// function printAuthorInfo(author: Post["what"]) {}

// 1-4. 중첩 가능
// authorId: number
function printAuthorInfo2(authorId: Post["author"]["id"]) {
  console.log(authorId);
}

// 2. 배열
// 2-1. 배열 타입[number 문자 또는 숫자]
// 어떤 숫자든 대괄호 앞이 배열 타입이면 요소 추출
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

const postList1: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이름",
  },
};

const postList2: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이름",
  },
};

// 2-2. 주의1: 인덱스에 들어가는 숫자는 값이 아니라 타입
// const authorKey = 0;
// function printAuthorInfo(author: Post[authorKey]) {} // 오류

// 2-3. 중첩 가능
function printAuthorInfo3(author: PostList[number]["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// 3. 튜플
// 3-1. 튜플 타입[number 문자 또는 인덱스]
// number는 튜플의 유니온 타입, 인덱스는 해당 타입 추출
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
type Tup3 = Tup[number]; // number | string | boolean

// 3-2. 주의1. 존재하지 않는 인덱스 타입 추출 불가
// type Tup4 = Tup[3]; // 오류
