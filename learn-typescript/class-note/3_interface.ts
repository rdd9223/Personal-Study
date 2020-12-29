interface User {
  age: number;
  name: string;
}

/**
 * 변수에 활용한 인터페이스
 * 장점
 * 1. 누가 보더라도 이해하기 편하다.
 * 2. 일정한 규칙으로 상호간에 약속한 것이다.
 */
var seho: User = {
  age: 33,
  name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: "캡틴",
  age: 100,
};
// any기 때문에 아무거나 들어가도 된다. 파라미터의 인터페이스를 정의해주자
// capt을 넣으면 위에 정의했던 User 인터페이스와 모양이 달라서 안된다. 이럴때는 capt을 수정해줘야한다.
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
// sum함수의 규칙(전체적인 모습)을 인터페이스에 정의할 수 있다.
// 협업시에 이렇게 정의를 하고 들어가면 좋다
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
// 인덱스로 접근해서 string이 들어있다고 정의
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
// arr[0]; // 'a'
// arr[0] = 11; // error

// 빨간 줄 뜬거 이후 코드는 타입스크립트가 제대로 인지하지 못할 수 있다.
// 그래서 그때그때 주석처리 해주자

// 딕셔너리 패턴
// 키에 해당하는 값을 먼저 타입선언
// RegExp: 정규표현식 생성자 타입
interface StringRegexDictionary {
  [key: string]: RegExp;
}

// 정규식으로 들어오는 객체의 타입을 정의해보자
var obj2: StringRegexDictionary = {
  // sth: /abc/,
  // 밸류값에 정규식을 입력하지 않았기 때문에 오류가 남
  // cssFile: 'css'
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
obj2["cssFile"] = "a"; // 정규식이 아니기 때문에 에러남!

// 딕셔너리 인터페이스의 장점은 이와같은 함수를 사용할 때, value값의 타입추론을 알아서 해준다는 것이다.
Object.keys(obj2).forEach(function (value) {
  //...
});

// 인터페이스 확장
// 프로토타입, 상속같이 인터페이스를 상속받아서 더 상속받아서 확장하는 것
interface Person {
  name: string;
  age: number;
}

// extends를 통해 상속을 받을 수 있다.
interface Developer extends Person {
  language: string;
}

// Person과 Developer의 모든 속성을 입력해야 한다.
var capt1: Developer = {
  language: "ts",
  age: 100,
  name: "캡틴",
};
