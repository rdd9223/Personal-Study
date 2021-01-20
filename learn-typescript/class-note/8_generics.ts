// function logText (text) {
//   console.log(text);
//   return text;
// }

// logText(10);  // 숫자 10
// logText('hi');  // 문자열 hi
// logText(true);  // 진위값 true

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText<string>("hi"); // hi라는 문자열이 들어가서 T에는 string 타입으로 변형되게된다.
// 함수를 호출하는 시점에서 타입을 정의하게 되고 리턴되는 타입마저 정의하게 되는 것이다.
