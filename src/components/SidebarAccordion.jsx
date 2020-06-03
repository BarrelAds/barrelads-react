import React, { Component } from 'react';

class SidebarAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    handleClick() {
        this.setState((state) => {
            return {
                isOpen: !state.isOpen
            }
        });
    }
    render() { 
        return (
            <div className="sidebar__accordion">
                <div className="sidebar__accordion__title" onClick={() => this.handleClick()}>
                    <i class={this.props.iconClass}></i>
                    <p>
                        {this.props.title}
                    </p>
                    <i class={this.state.isOpen ? "sidebar__accordion__title__carat sidebar__accordion__title__carat--open fas fa-chevron-right" : "sidebar__accordion__title__carat fas fa-chevron-right"}></i>
                </div>
                <div className={this.state.isOpen ? "sidebar__accordion__items" : "sidebar__accordion__items sidebar__accordion__items--closed"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default SidebarAccordion;