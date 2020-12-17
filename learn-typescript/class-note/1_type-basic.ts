// 원래는 이런식으로 작성했었다. JS 문자열 선언방식
var str = 'hello';

// TS 문자열 선언방식, var 말고 let이나 const를 사용해도 된다.
var str: string = 'hello';
// TS 숫자
let num: number = 10;
// TS 배열
let arr: Array<number> = [1,2,3]; 
let items: number[] = [1,2,3] // 둘이 같다. 리터럴을 이용한 선언방식이다.

let heroes: Array<string> = ['capt', 'thor', 'hulk', 10]; // 문자열 말고 다른 타입을 넣으면 에러가 난다!!

// TS 튜플: 특정 타입 뿐만 아니라 특정 타입의 순서까지 선언한다. (모든 인덱스에 타입이 정의되어 있는 배열)
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// 이렇게 넣으면 객체안의 값이 뭐가오든 상관없이 타입검사를 마무리한다.
// let person: object = {
//   name: 'capt',
//   age: 100
// }
// 이렇게 정의하면 해당 객체에 꼭 있어야하는 값의 타입을 정할 수 있다.
let person: { name: string, age: number } = {
  name: 'thor',
  age: 1000
}

// TS 진위값
let show: boolean = true;