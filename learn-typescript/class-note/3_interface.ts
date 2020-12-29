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
arr[0] = 11; // error
