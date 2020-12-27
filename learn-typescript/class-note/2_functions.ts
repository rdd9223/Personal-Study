// 함수의 파라미터에 타입을 정의하는 방식
function sum(a:number, b: number) {
  return a + b;
}

sum(10, 20); // 마우스로 가져다 놓으면 함수의 타입을 알 수 있다. 반환값이 number로 나오는 것은 vscode의 타입스크립트 추론값인데, 이것은 나중에 알아보자.

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10; // return 값이 없으면 반환값 정의를 number로 해야한다고 선언했기 때문에 오류가 난다.
}

// 함수의 타입을 정의하는 방식(기본적인 방식)
function sum1(a: number, b: number): number {
  return a + b;
}

// functions.js를 보자.
sum1(10, 20, 30, 40); 
// 처럼 여러개를 넣으면 불필요한 인자 2개를 넣었다고 에러가 뜬다.
// 자바스크립트처럼 유연하지 않고 엄격하게 제한하는 특성을 가지고 있다.