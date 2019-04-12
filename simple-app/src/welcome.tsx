import React, { Component } from 'react';
import './App.css';

class Welcome extends Component {

    render() {
        return (
            <React.Fragment>
                <head>
                    <title>Welcome Page</title>
                    <link href="demo.css" media="all" rel="stylesheet" type="text/css" />
                </head>
                <div id='container'>
                    <h1>Welcome Page</h1>
                    <p>Login succeeded. Now you can <a href=".">logout</a>.</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Welcome;
