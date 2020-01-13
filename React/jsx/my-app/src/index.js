import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 이거는 원래 있던거
// ReactDOM.render(<App />, document.getElementById('root'));

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
