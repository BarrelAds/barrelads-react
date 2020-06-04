import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SidebarAccordionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <Link to={this.props.link}>{this.props.title}</Link>
        );
    }
}
 
export default SidebarAccordionItem;