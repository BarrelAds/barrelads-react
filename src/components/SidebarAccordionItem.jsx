import React, { Component } from 'react';

class SidebarAccordionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <a href={this.props.link}>{this.props.title}</a>
        );
    }
}
 
export default SidebarAccordionItem;