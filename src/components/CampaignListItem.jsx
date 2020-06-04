import React, { Component } from 'react';

class CampaignListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div className="campaign-list__item">
                <div className="campaign-list__item__left">
                    <i class={this.props.iconClass}></i>
                    <div>
                        <h4>{this.props.title}</h4>
                        <p><div className={"campaign-list__item__indicator campaign-list__item__indicator--" + (this.props.indicatorColor ? this.props.indicatorColor : "gray")}></div>{this.props.status} — {this.props.description}</p>
                    </div>
                </div>
                <div className="campaign-list__item__right">
                    <a href={this.props.buttonLink ? this.props.buttonLink : "#"} className="button">{this.props.buttonText}</a>
                </div>
            </div>
        );
    }
}
 
export default CampaignListItem;