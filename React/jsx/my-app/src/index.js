import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 이거는 원래 있던거
ReactDOM.render(<App />, document.getElementById('root'));

// // 함수 처리
// const formatName = name => name.firstName + " " + name.lastName;

// // 이름객체
// const name = {
//     firstName: "영우",
//     lastName: "강"
// };

// // 시계함수
// function tick () {
//     const element = 
//         <div>
//             <h1>Hello, {formatName(name)}!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>

//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// };

// setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
