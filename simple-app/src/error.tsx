import React, { Component } from 'react';
import './App.css';

class Error extends Component {

    render() {
        return (
            <React.Fragment>
                <head>
                    <title>Error Page</title>
                </head>
                <div id="container">
                    <h1>Error Page</h1>
                    <p>Login failed. Invalid user name and/or password. <a href=".">Login again</a></p>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
