import React from 'react';
import PropTypes from 'prop-types';

import filter from '../../assets/svg/filter.svg';
import list from '../../assets/svg/list.svg';
import map from '../../assets/svg/map.svg';

import './index.css';

class Tab extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0,
        };

        this.changeTab = this.changeTab.bind(this);
    }
    
    changeTab (tabIndex) {
        return () => this.setState({ currentTab: tabIndex });
    } 

    render() {
        const { currentTab } = this.state;

        let tx = 0;
        
        if (currentTab === 1) {
            tx = '-33.33';
        }

        if (currentTab === 2) {
            tx = '-66.66'
        }

        return (
            <>
                <div className="mobile-nav-tab" >
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className={`col-lg-4 col-md-4 col-sm-4 col-xs-4 mobile-tab ${currentTab === 0 ? 'mobile-tab-active' : ''}`} onClick={this.changeTab(0)}>
                            <img src={list} width={22} height={22} />
                            List
                        </div>
                        <div className={`col-lg-4 col-md-4 col-sm-4 col-xs-4 mobile-tab ${currentTab === 1 ? 'mobile-tab-active' : ''}`} onClick={this.changeTab(1)}>
                            <img src={map} width={22} height={22} />
                            Map
                        </div>
                        <div className={`col-lg-4 col-md-4 col-sm-4 col-xs-4 mobile-tab  ${currentTab === 2 ? 'mobile-tab-active' : ''}`} onClick={this.changeTab(2)}>
                            <img src={filter} width={22} height={22} />
                            Filter
                        </div>
                    </div>
                </div>
                <div className="tab-content"> 
                    <div className="tab-content-inner" style={{ transform: `translateX(${tx}%)` }}>
                        {this.props.children}
                    </div>
                </div>
            </>
        );
    }
}

Tab.propTypes = {
    children: PropTypes.array
}

export default Tab;