import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import TOC from './TOC';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
        <BrowserRouter>
            <TOC/>
        </BrowserRouter>
    );
  }
}
 
export default App;