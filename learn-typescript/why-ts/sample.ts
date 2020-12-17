function add(a:number, b: number): number {
  return a + b;
}

add(10, 20); // sum위에 설명을 보게되면 입력값 뿐만 아니라 출력값도 typescript가 예상해서 타입을 지정해주는 것이 있다.
add(10, '20'); // 두번째 인자가 우리가 정의해놓은 타입이 아니기 때문에 오류메세지가 뜨는 것이 있다.
var result = add(10,20); // 이부분의 경우 리턴값이 숫자로 명시를 했기 때문에 result는 숫자관련 메소드만 뜨게된다.
result.toLocaleString()