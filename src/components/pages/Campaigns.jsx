import React, { Component } from 'react';

import Template from '../Template';
import CampaignList from '../CampaignList';
import CampaignListItem from '../CampaignListItem';

class Campaigns extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <Template>
                <div className="section">
                    <h1>All Campaigns</h1>
                    <p>Action Center</p>
                    <div className="creator-grid">
                        <div className="creator-grid__item">
                            <i class="fas fa-plus"></i>
                            <p>New campaign...</p>
                        </div>
                        <div className="creator-grid__item">
                            <i class="far fa-dot-circle"></i>
                            <p>Create an interactable campaign...</p>
                        </div>
                        <div className="creator-grid__item">
                            <i class="fas fa-film"></i>
                            <p>Create a pre-roll campaign...</p>
                        </div>
                    </div>
                    <CampaignList>
                        <CampaignListItem
                            iconClass="far fa-newspaper"
                            indicatorColor="green"
                            title="Full30 Refurb Ad Roll #4"
                            status="Active"
                            description="Pushing on Banners, Boxes, Pre-Rolls, and Interactables"
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="far fa-newspaper"
                            indicatorColor="green"
                            title="Full30 Refurb Ad Roll #3"
                            status="Active"
                            description="Pushing on Pre-Rolls and Interactables"
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="far fa-newspaper"
                            indicatorColor="green"
                            title="Full30 Refurb Ad Roll #3"
                            status="Active"
                            description="Pushing on Banners and Boxes"
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="far fa-dot-circle"
                            indicatorColor="red"
                            title="Restraelle Kickoff Ad Magazine (001)"
                            status="Unavailable"
                            description="Servers are under maintenance. Please wait a while."
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="far fa-dot-circle"
                            indicatorColor="gray"
                            title="BARRELADS TEST KICK 01"
                            status="Disabled"
                            description="No ads are pushed."
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="fas fa-film"
                            indicatorColor="gray"
                            title="BARRELADS TEST PREROLL AVI MUX"
                            status="Disabled"
                            description="No ads are pushed."
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="fas fa-film"
                            indicatorColor="gray"
                            title="BARRELADS TEST PREROLL AVI MUX"
                            status="Disabled"
                            description="No ads are pushed."
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="fas fa-film"
                            indicatorColor="gray"
                            title="BARRELADS TEST PREROLL AVI MUX"
                            status="Disabled"
                            description="No ads are pushed."
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="fas fa-film"
                            indicatorColor="gray"
                            title="BARRELADS TEST PREROLL AVI MUX"
                            status="Disabled"
                            description="No ads are pushed."
                            buttonText="Settings"
                            buttonLink="#"
                        />
                        <CampaignListItem
                            iconClass="fas fa-film"
                            indicatorColor="gray"
                            title="BARRELADS TEST PREROLL AVI MUX"
                            status="Disabled"
                            description="No ads are pushed."
                            buttonText="Settings"
                            buttonLink="#"
                        />
                    </CampaignList>
                </div>
            </Template>
        );
    }
}
 
export default Campaigns;