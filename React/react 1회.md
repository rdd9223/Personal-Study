# React

### 전략

1.  코딩을 짠다
2.  실행을 한다 (반복)
3.  deploy하는 법

### 웹사이트에 react추가하기

-   웹사이트: reactjs.org/docs/add-react-to-a-website.html

### jsx

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