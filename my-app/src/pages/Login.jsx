import React, { Component } from 'react';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            showPopup: false,
        };
    }

    handleUsernameChange = (event) => {
        const input = event.target.value.replace(/[^A-Za-z]/g, '');
        this.setState({ username: input });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleUsernameKeyPress = (event) => {
        const key = event.key;
        if (!/[a-zA-Z]/.test(key)) {
            event.preventDefault();
            this.setState({ showPopup: true });
            setTimeout(() => {
                this.setState({ showPopup: true });
            }, 1500);
        }

    }
    reset = (event) => {
        this.setState({ password: "", username: "" })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.username === 'ash' && this.state.password === '1234') {
            this.setState({ isLoggedIn: true });
        }
    };

    render() {
        if (this.state.isLoggedIn) {
            return <div>Welcome, {this.state.username}!</div>;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            onKeyPress={this.handleUsernameKeyPress}
                        />
                        {this.state.showPopup && <div className="popup">Enter only Alphabets.</div>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                        <div className="topping">
                            <input
                                type="checkbox"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                
                            />
                            IT
                        </div>
                        <div className="topping">
                            <input
                                type="checkbox"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                
                            />
                            Comps
                        </div>
                        <div className="topping">
                            <input
                                type="checkbox"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                
                            />
                            Aids
                        </div>
                        <div>Enter your description</div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">Login</button>
                    <button onClick={this.reset}>Reset</button>
                </form>
            );
        }
    }
}

export default LoginScreen;