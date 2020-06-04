import React, { Component } from 'react';

import Template from '../Template';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <Template>
                <div className="section">
                    <h1>Hello World</h1>
                    <p>Are you serious my nigga?</p>
                </div>
            </Template>
        );
    }
}
 
export default Home;