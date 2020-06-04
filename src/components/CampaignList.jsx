import React, { Component } from 'react';

class CampaignList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="campaign-list">
                <div className="view-header">
                    <p>Campaign List</p>
                    <div>
                        <i class="fas fa-grip-horizontal"></i>
                        <i class="fas fa-grip-lines"></i>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}
 
export default CampaignList;