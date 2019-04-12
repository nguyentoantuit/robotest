import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router';

class LoginComponent extends Component<any, any> {

    private _username: any;
    private _password: any;

    constructor(props: any) {
        super(props);
        this.login = this.login.bind(this);

        this._username = React.createRef();
        this._password = React.createRef();
    }

    private login() {
        let username = this._username.current.value;
        let password = this._password.current.value;
        if (username == "demo" && password == "1234") {
            this.props.history.push("/welcome");
        } else {
            this.props.history.push("/error");
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><label >User Name:</label></td>
                        <td><input id="username_field" size={30} type="text" ref={this._username}/></td>
                    </tr>
                    <tr>
                        <td><label>Password:</label></td>
                        <td><input id="password_field" size={30} type="password" ref={this._password}/></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td><input id="login_button" type="submit" value="LOGIN" onClick={this.login}/></td>
                    </tr>
                </table>
            </div>
        );
    }
}



const Login = withRouter(LoginComponent);

export default Login;
