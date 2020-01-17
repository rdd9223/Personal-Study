import React from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

// 온도 변환 함수 작성
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 온도 변환 함수를 호출하는 함수 작성
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 10000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 'c',
            temperature: ''
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({ scale: 'c', temperature: temperature});
    }

    handelFahrenheitChange = (temperature) => {
        this.setState({ scale: 'f', temperature: temperature});
    }

    render() {
        const {scale, temperature} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            // 입력을 받아 state에 저장하고 BoilingVerdict 렌더링
            <div>
                <TemperatureInput
                    scale='C'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale='F'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handelFahrenheitChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator;