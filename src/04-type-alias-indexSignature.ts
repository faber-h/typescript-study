/*
 * 타입 별칭
 * type 타입_이름
 */
type User = {
  id: number;
  name: string;
  nickname: string;
  location?: string;
};

let user1: User = {
  id: 1,
  name: "one",
  nickname: "oneone",
};

let user2: User = {
  id: 2,
  name: "two",
  nickname: "twotwo",
};

/*
 * 인덱스 시그니처
 * [key : key타입] : value타입
 * 인덱스 시그니처 형태의 모든 프로퍼티를 포함
 */
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
};

// 포함이므로 객체가 비워져 있어도 상관 없음
let emptyCountryCodes: CountryCodes = {};

// 반드시 포함해야 하는 프로퍼티가 있다면 추가적인 프로퍼티 직접 명시
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 1,
};

// 추가적인 프로퍼티를 정의할 때는
// 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이
// 호환되거나 일치해야 함
type CountryNumberCodes2 = {
  [key: string]: number;
  // Korea: string; // 오류 number와 string은 호환되지 않음
};
