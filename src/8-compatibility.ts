// Unknown 타입
function unknownExam() {
  let unknownVar1: unknown = 10;
  let unknownVar2: unknown = "abc";

  // 호환 불가능
  //let num: number = unknownVar1;
  //let str: string = unknownVar2;
}

// Never 타입
function neverExam() {
  function neverFunc(): never {
    throw new Error();
  }

  let neverVar: never;

  let num: number = 10;
  let str: string = "abc";

  // 호환 불가능
  // neverVar = num;
  // neverVar = str;

  // 호환 가능
  num = neverFunc();
  num = neverVar;
  str = neverFunc();
  str = neverVar;
}

// Void 타입
function voidExam() {
  function voidFucn(): void {
    console.log("Hello");
  }

  let voidVar: void;

  let num: number = 10;
  let str: string = "abc";

  // 호환 가능
  let unknownVar: unknown = voidFucn();
  let anyVar: any = voidFucn();
  voidVar = undefined;

  // 호환 불가능
  // voidVar = num;
  // voidVar = str;
  // num = voidFucn();
  // num = voidVar;
  // str = voidFucn();
  // str = voidVar;
  // let undefinedVar: undefined = voidFucn();
}

// Any 타입
function AnyExam() {
  let anyVar1: any = 10;
  let anyVar2: any = "abc";

  let num: number = 10;
  let str: string = "abc";
  let neverVar: never;

  // 모두 호환 가능
  anyVar1 = neverVar;
  anyVar2 = neverVar;
  anyVar1 = num;
  anyVar2 = num;
  anyVar1 = str;
  anyVar2 = str;
  num = anyVar1;
  num = anyVar2;
  str = anyVar1;
  str = anyVar2;

  // 단, never 타입에 any 타입 할당 불가능
  // neverVar = anyVar1;
  // neverVar = anyVar2;
}
