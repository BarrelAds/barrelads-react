import React, { Component } from 'react';

import ImageLogo from './static/img/barrelads.png';
import SidebarAccordion from './components/SidebarAccordion';
import SidebarAccordionItem from './components/SidebarAccordionItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div className="application">
        <div className="sidebar">
          <div>
            <img src={ImageLogo} alt=""/>
            <SidebarAccordion title="Campaigns" iconClass="far fa-compass">
              <SidebarAccordionItem title="All Campaigns"/>
              <SidebarAccordionItem title="Analytics"/>
              <SidebarAccordionItem title="Media"/>
              <SidebarAccordionItem title="Deployment"/>
            </SidebarAccordion>
            <SidebarAccordion title="Revenue & Billing" iconClass="fas fa-money-bill-wave">
              <SidebarAccordionItem title="Revenue Breakdown"/>
              <SidebarAccordionItem title="Billing & Bank"/>
              <SidebarAccordionItem title="Tax Handler"/>
            </SidebarAccordion>
            <SidebarAccordion title="Settings" iconClass="fas fa-cogs">
              <SidebarAccordionItem title="Registrar Details"/>
              <SidebarAccordionItem title="Machine Learning & Personalized Ads"/>
              <SidebarAccordionItem title="Configuration"/>
              <SidebarAccordionItem title="Log Out"/>
            </SidebarAccordion>
          </div>

          <div>
            <div className="sidebar__profile">
              <div className="sidebar__profile__image">
                <div className="sidebar__profile__image__container"></div>
              </div>
              <div className="sidebar__profile__details">
                <h6>restraelle</h6>
                <p>Basic Plan — Log Out</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="status-bar">
            <div className="status-bar__action-section">
              <div className="status-bar__action-section__profile"></div>
              <i class="fas fa-chevron-right"></i>
              <div className="status-bar__action-section__separator"></div>
              <i class="status-bar__action-section__notifications far fa-bell"></i>
              <div className="status-bar__action-section__button">Create</div>
            </div>
            
            <div className="status-bar__search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search through campaigns & media..."/>
            </div>
          </div>
          <div className="section">
            <h1>Hello World</h1>
            <p>Are you serious my nigga?</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;