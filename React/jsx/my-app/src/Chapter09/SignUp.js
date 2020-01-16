import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            name: "",
            gender: 1,
        }
    }

    handleChange = (event) => {
        // 새로 들어온 입력값을 setState를 통해 target.name에다가 저장함
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        var { name, gender } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type='text'
                        name={'name'}
                        value={name}
                        onChange={this.handleChange}/>
                </label>
                <br />
                <label>
                    gender
                    <select
                        name={'gender'}
                        value={gender}
                        onChange={this.handleChange}>
                        <option value={1}>Man</option>
                        <option value={0}>Woman</option>
                    </select>
                </label>
                <br />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default SignUp;