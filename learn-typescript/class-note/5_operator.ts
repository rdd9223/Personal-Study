// 한 함수로 다른 타입의 값을 받고싶을때 any밖에 답이 없을까?
// function logMessage(value: any) {
//   console.log(value)
// }
// logMessage('hello');
// logMessage(100);

// 타입정의의 유니온 타입
var seho1: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    // any에서는 타입추론이 안되기때문에 해당 타입에 관련된 자동완성 기능을 사용할수 없지만
    // 유니온 타입을 사용하면 선언한 타입의 메소드를 사용할 수 있다.
    value.toLocaleString();
  }
  // 타입가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
  if (typeof value === "string") {
    value.toString();
  }

  // 이렇게 오류를 던질 수 있음.
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer1 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

// 구조체에서의 유니온타입 활용, 문제
function askSomeone(someone: Developer1 | Person2) {
  // 원래는 해당하는 모든 프로퍼티를 제공해줘야하지만 겹치는 name만 프로퍼티로 제공해준다
  // 왜냐면 둘다 될 수도 있기 때문에, 타입 검증없이 써버리게 되면 충분히 오류가 날 수 있다고 생각하기 때문에,
  // 공통된 속성에 대해서만 제공한다.
  // someone.name;
  // someone.age;
  // someone.skill;
}

// 실제로는 Developer나 Person에 해당하는 값만 넘겨도 된다.
askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "캡틴", age: 100 });

function askSomeone2(someone: Developer1 & Person2) {
  // 모든 오브젝트의 프로프티 총 3개를 타입으로 지정해준다.
  // 실제로는 유니온타입이 인터섹션 타입보다 더 잘 사용된다.
  someone.name;
  someone.age;
  someone.skill;
}

// Developer의 속성과 Person의 타입까지 모두 넘겨야 한다.
askSomeone2({ name: "디벨로퍼", skill: "웹 개발", age: 24 });
askSomeone2({ name: "캡틴", age: 100 });

// 인터섹션 타입
var capt3: string & number & boolean;
