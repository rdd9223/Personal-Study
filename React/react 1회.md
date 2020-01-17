# React

### 전략

1.  코딩을 짠다
2.  실행을 한다 (반복)
3.  deploy하는 법

### 웹사이트에 react추가하기

-   웹사이트: reactjs.org/docs/add-react-to-a-website.html

---

## jsx

-   jsx는 자바스크립트의 문법 확장자다 (js + XML/HTML)

```jsx
const aaa = <a> asd <a/>
```

-   굉장히 편리하다

-   장점

    -   간결한 코드

        ```jsx
        <div> Hello, {name}</div>
        ```

        ```react
        React.createElement('div', null, 'slfjlsf{name}');
        ```

    -   인젝션 어택 방어

    -   버그 발견이 쉬움

    -   크로스사이트 어택을 방어할 수 있음

    -   항상 최신상태를 유지할 수 있음(각각의 엘리먼트)

-   중괄호 안에 javaScript코드가 들어감

-   formatName() 함수: 이름을 만들어줌

-   값을 정의하기

    -   큰 따옴표 사이에 문장을 넣거나
    -   중괄호 사이에 자바스크립트 코드를 넣으면 됨

-   객체 자체는 하나가 감싸고 있어야 한다는 사실!

-   자식은 여러개가 되게해도 됨

### 실습

-   프로덕션 빌드
    -   npm run build
-   developer build
    -   npm start
-   npm install -g serve
-   serve -s build
    -   5000번 포트로 들어가도 똑같이 뜸

### jsx 코드작성해보기 실습

-   변수에 XML/HTML코드를 집어 넣음

-   하지만 HTML코드 안에 중괄호{}를 이용해 변수 넣기 가능(동적)

-   물론 중괄호 안에 함수도 만들어서 활용 가능

-   자세한 것은 my-app의 index.js를 참고

    ```jsx
    // 함수 처리
    const formatName = name => name.firstName + " " + name.lastName;
    
    // 이름객체
    const name = {
        firstName: "영우",
        lastName: "강"
    };
    const element = <h1>Hello, {formatName(name)}!</h1>
    
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
    ```

---

## elements란?

-   요소, 성분이라는 뜻을 가지고 있음
-   리엑트에서는 리엑트 앱을 구성하는 가장작은 빌딩 블록이다.
-   elements는 화면에서 보이는 것을 기술한다.
-   react elements are immutable: 불변성
    -   엘리먼트가 생성 후에는 바꿀 수 없다.
    -   엘리먼트를 dom에 렌더링하기
-   root DOM node
    -   엘리먼트를 만들고
    -   돔에 렌더링을 한다.
-   렌더링된 element를 업데이트 하기
    -   tick을 이용해 매초 시간 렌더링 하기
    -   그 부분만 가상화 돔을 이용해 렌더링 할 것

### 시계만들기

-   f12(개발자모드)를 들어가서 계속 바뀌는 것을 확인하기

    ```jsx
    // index.js 에 처리해주기
    // 함수 처리
    const formatName = name => name.firstName + " " + name.lastName;
    
    // 이름객체
    const name = {
        firstName: "영우",
        lastName: "강"
    };
    
    // 시계함수
    function tick () {
        const element = 
            <div>
                <h1>Hello, {formatName(name)}!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
    
        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    };
    
    setInterval(tick, 1000);
    ```

---

## 컴포넌트와 프로퍼티

-   컴포넌트: 구성요소
    -   react는 component-Based
    -   레고블록 조립하듯 컴포넌트들을 모아서 개발한다고 생각하면 됨
    -   입력(props)을 받아서 출력(react element)을 내밷게 됨
    -   붕어빵 예시
        -   컴포넌트: 붕어빵 틀
        -   프롬퍼티: 밀가루, 속재료(팥, 슈크림, 고구마 등등)
        -   엘리먼트: 결과물(각각 다른 붕어빵)
-   props(property)
    -   요소, 재산이라는 뜻
    -   컴포넌트의 속성을 뜻함
    -   프로퍼티에 따라 다른 엘리먼트가 나옴
    -   읽기만 할 수 있음 (값을 바꿀 수가 없음)

### 자바스크립트를 통한 예시

-   pure: input을 변경하지 않으며, 같은 인풋에 대해서 항상 같은 output을 리턴하는 것

    ```js
    function sum (a, b) {
    	return a + b;
    }
    ```

-   impure: input을 변경하는 경우

    ```js
    function withdraw (account, amount) {
    	account.total -= amount;
    }
    ```

    -   input값인 account를 변하게 하는 것이므로 impure

-   All React components must act like pure functions with respect to their props.

-   프롭스를 직접 바꿀 수 없고, 같은 프롭스에 대해서는 항상 같은 결과를 보여줄 것!

-   a -> component -> a

### component 만들기

-   컴포넌트의 종류
    -   펑션 컴포넌트
    -   클래스 컴포넌트

1.  펑션 컴포넌트

    -   그냥 자바스크립트 함수라고 생각하면 됨

        ```jsx
        function Welcome(props) {
        	return <h1>Hello, {props.name}</h1>;
        }
        ```
        -   인풋으로 props를 받아서 output으로 element를 반환하면 됨

2.  클래스 컴포넌트

    -   es6에 나오는 클래스를 사용

        ```jsx
        class Welcome extends React.Component {
        	render() {
        		return <h1>Hello, {this.props.name}</h1>;
        	}
        }
        ```

    -   펑션 컴포넌트에 비해 몇 가지 추가적인 기능을 가짐

-   컴포넌트의 이름은 항상 대문자로 시작해야한다.

    -   Dom태그로 인식하기 때문에

        ```jsx
        <div />; //x
        <Welcome name="sara" />; //o
        ```

-   컴포넌트 안에 또 다른 컴포넌트를 쓸수있다

-   복잡한 화면을 여러개의 컴포넌트로 구성해 표현 가능

### 컴포넌트로 추출하기

-   큰 컴포넌트를 산산조각내자!
    -   크면 개발할 때 불편하고, 조각내면 재사용성이 높아진다.
    -   개발속도도 결국 올라가게 된다.

### 댓글 컴포넌트 만들기 실습

-   너무 지저분해 보이면 CSS코드를 분리
-   app.js와 Comment.js 를 참조할 것

---

## State and Lifecycle

-   굉장히 중요한 내용이다. 까먹지 말고 반복적으로 할것
-   State (상태)
    -   react component의 상태, 데이터를 의미함
    -   component에 대한 변경 가능한 데이터
    -   state는 사용자가 정의한다.
    -   렌더링할때 관련있는 데이터들만 취급
    -   그렇지 않은 값들은 컴포넌트의 필드로 정의할 것(하드코딩)
    -   state는 직접 수정 할 수 없다.(하면 안된다.)
        -   리엑트에서 알아서 관리하기 때문에 우리가 의도하지 않는 방향으로 흘러갈 수가 있다.
    -   변경할 때는 setState 함수를 사용해야 함
-   Lifecycle(생명주기)
    -   리엑트 컴포넌트의 라이프사이클
        1.  mounting(출생)
            1.  생성자를 통해 생성
            2.  렌더링이 됨
            3.  컴포넌트가 마운트가 됨
        2.  updating(인생)
            1.  새로운 프롭스, 스테이트가 변경되거나, 강제 업데이트 될때
            2.  렌더링
            3.  리엑트가 다시 dom으로 렌더링
            4.  컴포넌트 업데이트 됨
        3.  unmounting(사망)
            1.  컴포넌트가 더이상 필요없어질 때 ummount됨
            2.  un마운트가 되기 직전에 호출되는 함수가 있음

### state 사용해보기(실습)

### lifecycle 사용해보기

---

## event

-   사건

    -   특정 사건을 의미

    -   버튼클릭 이벤트 -> 사용자가 버튼을 클릭한 사건

    -   camelCase를 따름

        ```react
        <button onClick={activateLasers}>
        	Activate Lasers
        </button>
        ```

-   event handler

    -   이벤트를 처리하는 함수

    -   어떤 사건이 발생하면, 사건을 처리하는 역할

    -   이벤트 리스너라고도 불리기도 함

    -   어떻게 추가할까?

        -   bind를 사용, 바인드를 해야지 무조건 사용할 수 있음
        -   class field Syntax사용
            -   컨트스트럭터 부분에서 바인딩 x
            -   에러부분에서 사용 (실험적인 부분이 있다)
            -   이부분이 더 많이 쓰임
            -   함수 선언 후 계속 사용
        -   Arrow 펑션을 이용하는 방법
            -   직접 사용
            -   계속 다른 콜백함수를 보내는 단점이 있음
            -   로깅버튼이 렌더링 될때마다임
            -   하위 컴포넌트의 prop으로 넘어가게 되면 추가적인 렌더링이 필요해져버림
            -   다른 방법 사용하는 것을 권장

    -   Event Handler에 Arguments전달하기

        -   아규먼트

            -   논쟁, ㅁ말다툼, 주장
            -   함수에 주장할 내용, 전달할 데이터라고 생각 해라
            -   파라미터라고도 부른다

        -   방식

            ```react
            // id 라는 argument를 deleteRow 함수에 전달
            // Arrow Function
            <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
            // used bind
            <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
            ```

---

## Conditional Rendering

-   Condition

    -   조건이라는 뜻

-   조건에 따른 렌더링

-   예) true이면 버튼을 보여주고, false이면 버튼을 가린다.

    ```react
    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }
    
    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }
    ```

-   element variable

-   inline condition

    -   조건을 코드 안에 집어넣는 것

    -   if문 경우 &&를 사용

        -   true && expression => expression

        -   false && expression => false

            ```react
            <div>
                <h1>
                    hello!
                </h1>
                {unreadMessages.length > 0 && 
                	<h2>
                        You have {undeadMessages.length} unread messages.
                	</h2>
                }
            </div>
            ```

    -   if-else문의 경우 ?를 사용

        -   condition ? true : false

            ```react
            const isLoggedIn = this.state.isLoggedIn;
            return (
            	<div>
            		the user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
            	</div>
            )
            // 또는 로그인 버튼과 로그아웃 버튼 렌더링
            return (
            	<div>
                	{isLoggedIn ? (
                    	<LogoutButton onClick={this.handleLogoutClick} />
                    ) : (
                    	<LoginButton onClick={this.handleLoginClick} />
                    )}
                </div>
            );
            ```

-   컴포넌트의 렌더링 막기
    
    -   null을 리턴하면 렌더링되지 않음

### 로그인버튼 렌더링하기

---

## Lists and Keys

-   list

    -   목록이라는 의미
    -   Array로 나타내는데 JS의 변수나 객체들을 하나의 변수로 묶어놓은것
    -   const numbers = [1,2,3,4,5]; 이런식
    -   react에서는 Array를 사용하여 다수의 Element를 렌더링 할 수 있다.
    -   javascript의 map함수를 이용해서 사용
    -   별도의 component로 만들기

-   Keys

    -   열쇠라는 의미

    -   열쇠들은 모양이 같지 않다.

    -   아이템들을 구분하기 위한 고유한 문자열

    -   ex 주민등록번호, 학번, 핸드폰 번호, 여권번호 등등

    -   key의 값은  해당 element안에서만 고유한 값이면 된다

    -   key로 값을 사용하는 경우

        ```react
        const numbers = [1,2,3,4,5];
        const listItems = numbers.map((number) =>
        	<li key={number.toString()}>
            	{number} 
        	</li>
        );
        ```

    -   key로 객체의 ID를 사용하는 경우

        ```react
        const todoItems = todos.map((todo) => 
        	<li key={todo.id}>
            	{todo.text} 
        	</li>
        );
        ```

    -   key로 index를 사용하는 경우

        ```react
        const todoItems = todos.map((todo, index) => 
            // Only do this if items have no stable IDs
            // idx를 사용하면 안되는 이유가 idx순서가 항상 바뀔수 있기때문에 구분은 가능하지만 key의 조건은 충족하지 못함
        	<li key={index}>
            	{todo.text} 
        	</li>
        );
        ```

-   Key를 이용하여 ListItem Component 만들기

-   List의 아이템을 Component로 분리!

-   map() 안에 있는 element는 키가 꼭 필요하다!

-   key는 props로 전달되지 않는다!

    ```react
    // 굳이 props로 넘겨주고 싶다면 key라는 것을 하나 만들어서 id값을 대입해 넣어줘야 한다.
    const content = posts.map((post) =>
    	<Post
            key={post.id}
            id={post.id}
            title={post.title} />
    );
    ```

-   JSX안에 map()넣기

    ```react
    function NumberList(props) {
        const numbers = props.numbers;
        return (
        	<ul>
                {numbers.map((number) => 
    				<ListItem key={number.toString()}
                        	   value={number} />
                )}
            </ul>
        );
    }
    ```

### 출석부 출력하기

---

## Forms

### Form 이란?

-   양식

-   사용자로부터 입력을 받기위해 사용

-   예시: HTML form

    ```html
    <form>
        <label>
        	Name:
        	<input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>
    ```

### Controllen Components

-   누군가의 통제를 받는 컴포넌트

-   그 값이 React의 통제를 받는 input on element이다.

-   모든 데이터를 state에서 관리한다.

-   사용자의 입력을 직접적으로 제어할 수 있다.

    -   모든 입력값을 대문자로 변경하기

        ```react
        handleChange(event) {
            this.setState({value: event.target.value.toUpperCase()});
        }
        // input값의 변화가 모두 handleChange()에서 처리되기 때문에, 원하는대로 사용자의 입력을 제어할 수 있다.
        ```

    -   응용하면 내가 원하지 않는 값을 입력하면 경고창을 띄우거나 할 수 있다.

### Text area

-   HTML textarea tag

    ```HTML
    <textarea>
    	Hello there, this is some text in a text area
    </textarea>
    ```

### Select Tag

-   HTML select tag

    ```html
    <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </select>
    ```

-   다수의 옵션 중에서 하나 또는 여러개를 선택할 수 있도록 한다.

    ```react
    <select multiple={true} value={['B', 'C']}></select>
    ```

### File Input Tag

-   HTML fileinput tag

    ```react
    <input type="file" />
    ```

-   Uncontrolled Component : 읽기만 할 수 있기 때문에 제어할 수 없다.

### Multiple Inputs

-   ![image-20200117002141321](C:\Users\rdd92\AppData\Roaming\Typora\typora-user-images\image-20200117002141321.png)

### Input Null Value

-   초반에 input 값이 정해져 있어서 입력불가 상태였다가, 1초뒤에 입력 가능한 상태로 바뀜

    ```react
    ReactDom.render(<input value="hi" />, mountNode);
    
    setTimeout(function() {
        ReactDom.render(<input value={null} />, mountNode);
    }, 1000);
    ```

### 사용자 정보 입력받기 (실습)

---

## 공통된 state 다루기

### Lifting State Up

-   Shared State

    -   state에 있는 데이터를 여러개의 하위 컴포넌트에서 공통적으로 사용하는 경우
    -   ![image-20200117112657186](C:\Users\rdd92\AppData\Roaming\Typora\typora-user-images\image-20200117112657186.png)
    -   부모자식 관계가 아니다.
    -   모두 하나의 값을 사용한다!
    -   하위 컴포넌트들이 각자 State에 데이터를 갖고 있을 필요가 없다.

-   Temperture Calculator

    -   섭씨 온도값에 따라서 물이 끓는지 여부를 리턴하는 컴포넌트

        ```react
        function BoilingVerdict(props) {
            if (props.celsius >= 100) {
                return <p>The water would boil.</p>;
            }
            return <p>The water would not boil.</p>;
        }
        ```

    -   하위 컴포넌트의 state를 공통 상위 컴포넌트로 올림

---

## Composition 과 Inheritance

### Composition vs Inheritance

-   composition

    -   구성이라는 뜻을 가짐

    -   여러개의 컴포넌트를 합쳐서(구성해서)새로운 컴포넌트를 만드는 것

    -   composition 사용기법

        -   containment

        -   보통 sidebar 나 dialog같은 box형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없다.

        -   이런 경우에 children이라는 prop을 사용해서 조합

        -   ```react
            // children prop을 사용한 FancyBorder 컴포넌트
            function FancyBorder(props) {
                return(
                	<div className={'FancyBorder FancyBorder-' + props.color}>
                        {props.children}
                    </div>
                );
            }
            
            // FancyBorder 컴포넌트 안에 있는 모든 JSX태그는 children으로 전달됨
            function WelcomeDialog() {
                return (
                	<FancyBorder color="blue">
                    	<h1 className="Dialog-title">
                        	Welcome
                        </h1>
                        <p className="Dialog-message">
                        	Thank you for visiting our spacecraft!
                        </p>
                    </FancyBorder>
                );
            }
            ```

        -   여러개의 children 집합이 필요한 경우는 어떻게 할까?

        -   ```react
            // left와 right로 구분하여 prop을 만듬
            function SplitPane(props) {
                return (
                	<div className="SplitPane">
                    	<div className="SplitPane-left">
                        	{props.left}
                        </div>
                        <div className="SplitPane-right">
                        	{props.right}
                        </div>
                    </div>
                );
            }
            
            // left와 right에 각각 렌더링할 컴포넌트를 넣어줌
            function App() {
                return (
                	<SplitPane
                        left={
                            <Contacts />
                        }
                        right={
                            <Chat />
                        } />
                );
            }
            ```

    -   Specialization

        -   전문화, 특수화

        -   WelcomeDialog는 Dialog의 특별한 케이스이다.

        -   기존의 객체지향 언어에서는 상속을 사용하여 Specialization을 구현

        -   React에서는 Composition을 사용하여 Specialization을 구현

        -   ```react
            // title, message를 prop으로 받아서 렌더링
            function Dialog(props) {
                return (
                	<FancyBorder color="blue">
                    	<h1 className="Dialog-title">
                        	{props.title}
                        </h1>
                        <p className="Dialog-message">
                        	{props.message}
                        </p>
                    </FancyBorder>
                );
            }
            
            // title, message를 prop으로 전달
            function WelcomeDialog() {
                return (
                	<Dialog
                        title="Welcome"
                        massage="Thank you for visiting our spacecraft!" />
                );
            }
            ```

    -   Containment와 Specialization을 같이 사용해보기

-   상속

    -   다른 컴포넌트로부터 상속을 받아서 새로운 컴포넌트를 만드는 것
    -   페이스북에서, 수천개의 React 컴포넌트를 사용했지만, 상속을 사용해서 컴포넌트를 만드는 것을 추천할만한 Use Case를 찾지 못했다 -> 상속을 사용할 필요가 없다
    -   복잡한 컴포넌트를 쪼개서 여러개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합해서 새로운 컴포넌트를 만들자!

