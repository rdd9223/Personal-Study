import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// #1 기본사항 배우기
// export default class HelloWorldApp extends Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <Text>Hello, world!</Text>
//             </View>
//         );
//     }

// #2 props 속성
// import { Image } from 'react-native';
//
// export default class Bananas extends Component {
//     render() {
//         let pic = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         };
//         return (
//             <Image source={pic} style={{width: 193, height: 110}}/>
//         );
//     }
// }
//
// class Greeting extends Component {
//     render() {
//         return (
//             <View style={{alignItems: 'center'}}>
//                 <Text>Hello {this.props.name}!</Text>
//             </View>
//         );
//     }
// }
//
// export default class LotsOfGreetings extends Component {
//     render() {
//         return (
//             <View style={{alignItems: 'center', top: 50}}>
//                 <Greeting name='Rexxar' />
//                 <Greeting name='Jaina' />
//                 <Greeting name='Valeera' />
//             </View>
//         );
//     }
// }

// #3 상태
// class Blink extends Component {
//
//     componentDidMount(){
//         // Toggle the state every second
//         setInterval(() => (
//             this.setState(previousState => (
//                 { isShowingText: !previousState.isShowingText }
//             ))
//         ), 1000);
//     }
//
//     //state object
//     state = { isShowingText: true };
//
//     render() {
//         if (!this.state.isShowingText) {
//             return null;
//         }
//
//         return (
//             <Text>{this.props.text}</Text>
//         );
//     }
// }
//
// export default class BlinkApp extends Component {
//     render() {
//         return (
//             <View>
//                 <Blink text='I love to blink' />
//                 <Blink text='Yes blinking is so great' />
//                 <Blink text='Why did they ever take this out of HTML' />
//                 <Blink text='Look at me look at me look at me' />
//             </View>
//         );
//     }
// }

// #4 스타일
// const styles = StyleSheet.create({
//     bigBlue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//     },
//     red: {
//         color: 'red',
//     },
// });
//
// export default class LotsOfStyles extends Component {
//     render() {
//         return (
//             <View>
//                 <Text style={styles.red}>just red</Text>
//                 <Text style={styles.bigBlue}>just bigBlue</Text>
//                 <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//                 <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//             </View>
//         );
//     }
// }

// #5-1 고정치수
// export default class FixedDimensionsBasics extends Component {
//     render() {
//         return (
//             <View>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//                 <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//             </View>
//         )
//     }
// }

// #5-2 플렉스 치수
// export default class FlexDimensionsBasics extends Component {
//     render() {
//         // Try removing the 'flex: 1' on the parent View.
//         // The parent will not have dimensions, so the children can't expand.
//         // What if you add `height: 300` instead of `flex: 1`?
//         return (
//             <View style={{flex: 1}}>
//                 <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//                 <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//                 <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//             </View>
//         )
//     }
// }

// #6 Flexbox를 사용한 레이아웃
//
// row를 주축으로 50씩 그라데이션을 줌
// row: 왼쪽에서 오른쪽으로
// column(default): 위에서 아래로, 줄바꿈이 활성화 된 경우 왼쪽 첫 번째 항목부터 시작
// row-reverse: 오른쪽에서 왼쪽으로
// column: 아래에서 위쪽으로
//
// export default class FlexDirectionBasics extends Component {
//     render() {
//         return (
//             // try setting `flexDirection` to `column`
//             <View style={{flex:1, flexDirection: 'row'}}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//             </View>
//         )
//     }
// }

//