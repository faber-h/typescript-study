/*
 * 클래스
 * 동일한 모양의 객체를 더 쉽게 생성하도록 도와주는 문법
 */
// 타입스크립트의 클래스
// 클래스의 필드를 선언할 때 타입 주석으로 타입을 함께 정의
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일");
  }
}

// 클래스는 타입으로 사용 가능
const employee: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

// 타입스크립트의 상속
// 생성자를 정의했다면 반드시 super 메서드를 호출해야 하며
// 호출 위치는 생성자의 최상단
class ExamEmployee extends Employee {
  // 필드
  id: number;

  // 생성자
  constructor(name: string, age: number, position: string, id: number) {
    super(name, age, position);
    this.id = id;
  }
}

// 접근 제어자
// 타입스크립트 고유 기능
// 클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정
// public : 모든 범위에서 접근 가능
// private : 클래스 내부에서만 접근 가능
// protected : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
class Employee2 {
  // 필드
  name: string; // default - public
  public age: number;
  private position: string;
  protected year: number;

  // 생성자
  constructor(name: string, age: number, position: string, year: number) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.year = year;
  }

  // 메서드
  work() {
    console.log(`${this.position}에서 일함`); // private - 클래스 내부 접근 가능
    console.log(`${this.year}동안 일함`); // protected - 클래스 내부 접근 가능
  }
}

class ExamEmployee2 extends Employee2 {
  func() {
    this.name;
    this.age;
    // this.position; // private - 파생 클래스 접근 불가능
    this.year; // protected - 파생 클래스 접근 가능
  }
}

const employee2 = new Employee2("이름", 1, "devloper", 1);

employee2.name = "홍길동";
employee2.age = 11;
// employee2.position = "디자이너"; // private - 클래스 외부 접근 불가능
// employee2.year = 5; // protected - 클래스 외부 접근 불가능

// 생성자에 접근 제어자 설정 가능
// -> 자동으로 필드 설정
// -> 자동으로 `this.필드 = 매개변수` 수행
// 필드 선언과 생성자 내부 코드를 생략하는 것이 훨씬 간결하고 빠르게 코드를 작성할 수 있기 때문에
// 타입스크립트에서 클래스를 사용할 때에는 보통 생성자 매개변수에 접근 제어자를 설정
class Employee3 {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}
}

// 인터페이스
// 클래스의 설계도 역할
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

//  implements 키워드 사용 시
// 인터페이스 타입을 만족하도록 클래스를 구현
// 인터페이스로 정의하는 필드는 무조건 public이므로
// private, protected 는 따로 구현
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
