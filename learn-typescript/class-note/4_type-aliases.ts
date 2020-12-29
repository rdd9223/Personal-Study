// interface Person1 {
//   name: string;
//   age: number;
// }

type Person1 = {
  name: string;
  age: number;
};

// 인터페이스로 타입정의를 하게 된다면 오류가 났을 때 어떤 프로퍼티가 필요한지 알려주게 된다.
// 타입별칭을 사용하게 된다면, Person1안에 있는 모양을 볼 수 있게 된다. 하지만 확장이 안된다.
// 좋은 소프트웨어는 확장이 용이해야한다는 원칙의 위키피디아 글이 있다. 이 원칙에 따라 인터페이스를 주로쓰자
var seho: Person1 = {
  name: "세호",
  age: 30,
};

type MyString = string;
var str: MyString = "hello";

// 이런식으로 사용하게 된다면 코드 가독성이 높아진다는 장점이 있다.
type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
