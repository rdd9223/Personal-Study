import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chapter06 from './Chapter06';
import Greeting from './Chapter07/Greeting'
import LoginControl from './Chapter07/LoginControl'
import AttendanceBook from './Chapter08/AttendanceBook';
import SignUp from './Chapter09/SignUp';
import Calculator from './Chapter10/Calculator';
import UserProfile from './Chapter11/UserProfile';
import UserProfileList from './Chapter11/UserProfileList';

// Chapter11
// ReactDOM.render(<UserProfile />, document.getElementById('root'));
ReactDOM.render(<UserProfileList />, document.getElementById('root'));

// Chapter10
// ReactDOM.render(<Calculator />, document.getElementById('root'));

// Chapter09
// ReactDOM.render(<SignUp />, document.getElementById('root'));

// Chapter08
// ReactDOM.render(<AttendanceBook />, document.getElementById('root'));

// Chapter07
// ReactDOM.render(<Greeting isLoggedIn={true}/>, document.getElementById('root'));
// ReactDOM.render(<LoginControl />, document.getElementById('root'));

// Chapter06
// ReactDOM.render(<Chapter06 />, document.getElementById('root'));

// 이거는 원래 있던거
// ReactDOM.render(<App />, document.getElementById('root'));

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
