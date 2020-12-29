class Person2 {
  // 여기에 this로 사용할 것들을 정의해 놓아야 사용할 수 있음
  // 변수의 접근 범위도 사용할 수 있음
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
