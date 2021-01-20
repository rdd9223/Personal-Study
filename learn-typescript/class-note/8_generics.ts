// function logText (text) {
//   console.log(text);
//   return text;
// }

// logText(10);  // 숫자 10
// logText('hi');  // 문자열 hi
// logText(true);  // 진위값 true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("hi"); // hi라는 문자열이 들어가서 T에는 string 타입으로 변형되게된다.
// 함수를 호출하는 시점에서 타입을 정의하게 되고 리턴되는 타입마저 정의하게 되는 것이다.

function logText(text: string) {
  console.log(text);
  // text.split('').reverse().join(''); // string이니까 가능한 메소드
  return text;
}

// 이런식으로 기능은 비슷하지만 타입만 달라지는 코드들은 유지보수 측면에서 좋지 않다.
function logNumber(num: number) {
  console.log(num);
  return num;
}

// 이렇게 다양한 타입을 받을 수 있는 이유는 우리가 타입을 정의하지 않았기 때문에(any)
logText("app");
logText(10);
const num = logNumber(10);
logText(true);
