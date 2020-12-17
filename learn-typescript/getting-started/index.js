// 브라우저가 이런 파일을 받아들이기에는 어렵다.
// 그래서 ts 파일을 js로 변환해주는 과정을 컴파일이라고 하는데 이것을 할 것이다.
// tsc index.ts 명령어를 사용하면 이렇게 index.js파일이 만들어진다.
function sum(a, b) {
    return a + b;
}
sum(10, 20);
