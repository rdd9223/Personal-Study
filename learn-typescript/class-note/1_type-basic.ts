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