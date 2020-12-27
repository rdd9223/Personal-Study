// type과 interface로 타입정의시 코드중복을 최소화 할 수 있다. interface를 사용하는 것이 더 좋다. 이유는 다음 챕터에서 알아보자.
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// }

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// let todoItems: Array<object>; // object[]
let todoItems: Todo[];

// api -> 실제 api는 axios로 할 것이다. 하지만 지금 예는 얼마나 잘 타입스크립트를 잘 조정할 것인지 하기위해 간단하게 만들었다.
function fetchTodoItems(): Todo[] {
  const todos: Array<Todo> = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Array<object> {
  const todos: Array<object> = fetchTodoItems(); // 여기서는 굳이 타입정의 안해도 됨
  return todos;
}

function addTodo(todo: Todo): void {  // 구체적으로 정의를 해야지 todo의 오류가 사라진다.
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

// todo 파라미터의 모습이 object로 선언하면 done이 있는지 없는지 모른다.
function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): Array<object> {
  return todoItems.filter((item: {done: boolean}) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addTodo({id: 4, title: '공부', done: false})
  addTodo({id: 5, title: '재밌다', done: false})
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems(); // 함수의 반환타입과 받는 값의 정의가 같아야한다.
addTwoTodoItems();
log();
