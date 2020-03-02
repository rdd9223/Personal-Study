// 각 파라메터에 Type을 지정해줌으로써 타입 충돌이나 버그를 예방할 수 있음
// 함수의 리턴 Type을 지정하여 함수의 반환 값을 알 수 있음
const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

// 인수에 잘못된 형식의 데이터를 넣으면 허용되지 않는다고 표시함
// 이것은 실수를 유발하지 않게끔 도와준다.
console.log(sayHi('Nicolas', 24, "male"));

export {};