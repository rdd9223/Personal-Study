import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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

// #6-1 레이아웃 방향
// LTR(default): 왼쪽에서 오른쪽으로 배치
// RTL: 오른쪽에서 왼쪽으로 배치
// flex-start: 컨테이너의 하위축을 컨테이너의 기본축 시작부분에 맞츰
// flex-end: 컨테이너의 하위축을 컨테이너의 마지막 부분에 맞춤
// center: 컨테이너의 주축 중심에 컨테이너의 하위축을 맞춤
// space-between: 컨테이너의 주축을 가로지르는 공간이 고르게 분배되어 자식간의 공간이 균일해진다
// space-around: 자식과 축이 양쪽으로 똑같은 너비를 가지도록 분배된다.
// space-evenly: 주축을 따라 정렬 컨테이너 내에 고르게 분포됨
// export default class JustifyContentBasics extends Component {
//     render() {
//         return (
//             // Try setting `justifyContent` to `center`.
//             // Try setting `flexDirection` to `row`.
//             <View style={{ flex:1, flexDirection: `row`, justifyContent: `center`,}}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//             </View>
//         )
//     }
// }

// #6-2 레이아웃 항목 정렬
// alignItems 컨테이너의 가로축을 따라 자식을 정렬하는 방법을 설명.
// stretch: height 컨테이너의 가로 축과 일치하도록 컨테이너의 자식을 늘린다.
// flex-start: 컨테이너의 자식을 컨테이너의 교차 축 시작에 맞춘다.
// flex-end: 컨테이너의 자식을 컨테이너의 가로 축 끝에 맞춘다.
// center: 컨테이너의 자식을 컨테이너의 가로 출 가운데에 맞춘다
// baseline: 공통 기준선을 따라 컨테이너의 자식을 정렬한다. 개별 자식을 부모의 기준선으로 설정할 수 있다.
// export default class AlignitemsBasics extends Component {
//     render() {
//         return (
//             // Try setting `alignItems` to 'flex-start'
//             // Try setting `justifyContent` to `flex-end`.
//             // Try setting `flexDirection` to `row`.
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'stretch',
//             }}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{height: 50, backgroundColor: 'skyblue'}} />
//                 <View style={{height: 100, backgroundColor: 'steelblue'}} />
//             </View>
//         )
//     }
// }

// #7 텍스트 입력 처리
// export default class PizzaTranslator extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {text: ''};
//     }
//
//     render() {
//         return (
//             <View style={{padding: 10}}>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                     value={this.state.text}
//                 />
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//             </View>
//         );
//     }
// }