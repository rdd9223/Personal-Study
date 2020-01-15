import React from 'react';
import ReactDom from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 바운드를 쓰는 방법
    //     // This binding is necessary to make 'this' work in the callback
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }
    }

        // 애로우 펑션으로 바꾸는 방법
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            // 이벤트 핸들러를 넣음
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDom.render(
    <Toggle />,
    document.getElementById('root')
);

export default Toggle;