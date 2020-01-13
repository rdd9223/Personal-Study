import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

// 서버에서 데이터가 날아왔다고 생각하고 한번 렌더링 해보기
const commentsFromServer = [
  { id: 1, name: '강영우', content: '여러분 안녕?'},
  { id: 2, name: '자스왕 머현', content: '영우도 안녕?'},
  { id: 3, name: '운영자', content: '모두들 안녕'}
];

var timer;

// function App() {
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: [
        { id: 1, name: '강영우', content: '여러분 안녕?'},
        { id: 2, name: '자스왕 머현', content: '영우도 안녕?'},
        { id: 3, name: '운영자', content: '모두들 안녕'}
      ]
    };
  }

  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      // if (comments.length < commentsFromServer.length) {
      //   let index = comments.length;
      //   comments.push(commentsFromServer[index]);
      if(comments.length > 0) {
        comments.pop();
        this.setState({
          comments: comments
        });
      } else if (timer) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    // 렌더링할 때는 밖에 있는 스테이트를 가져다가 주기
    const {comments} = this.state;

    return (
      // 스타일 입히기
      <div className="App" style={{ padding: 16, backgroundColor: '#282c34'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <div>
            {comments.map((comment, index) => {
              return (
                <Comment
                  key = {comment.id}
                  id = {comment.id}
                  name = {comment.name}
                  content = {comment.content} />
              )
            })};
          </div>
      </div>
    );
  }
}

// }

export default App;
