// 조금 더 보기 편한 버전일 뿐, 기능이 바뀌는 건 아니다.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person("캡틴", 100);

// 위와 아래는 구동하는 방법이 완전히 같음!

class Person {
  // 클래스 로직을 써주면 된다.
  constructor(name, age) {
    // 초기화 함수
    console.log("생성되었습니다");
    this.name = name;
    this.age = age;
  }
}

var yw = new Person("영우", 24); // 생성 되었습니다.
console.log(yw);
