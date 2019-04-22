import React from 'react';
import location from '../assets/svg/pin.svg';

const List = () => (
    <section className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
        <div className="input-container col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ul className="lists"> 
                <li>
                    <div className="list-header">
                        <span className="list-price-tags">NGN 250,000</span>
                        <span className="list-source-tags">Propety Pro</span>
                    </div>
                    <div className="list-body">
                        <div className="list-body-title">
                            <img src={location} className="list-pin-icon" />
                            <h4>18 Agege Motor Road Lagos</h4>
                        </div>
                        <div className="list-body-content">
                           <div className="list-body-info">
                                <div className="input-label">NO. Of Bedrooms</div>
                                <h4>1</h4>
                           </div>
                           <div className="list-body-info">
                                <div className="input-label">NO. Of Toilets</div>
                                <h4>1</h4>
                           </div>
                           <div className="list-body-info">
                                <div className="input-label">NO. Of Toilets</div>
                                <h4>1</h4>
                           </div> 
                        </div>
                    </div>
                </li>
                <li>
                    <div className="list-header">
                        <span className="list-price-tags">NGN 250,000</span>
                        <span className="list-source-tags">Propety Pro</span>
                    </div>
                    <div className="list-body">
                        <div className="list-body-title">
                            <img src={location} className="list-pin-icon" />
                            <h4>18 Agege Motor Road Lagos</h4>
                        </div>
                        <div className="list-body-content">
                           <div className="list-body-info">
                                <div className="input-label">NO. Of Bedrooms</div>
                                <h4>1</h4>
                           </div>
                           <div className="list-body-info">
                                <div className="input-label">NO. Of Toilets</div>
                                <h4>1</h4>
                           </div>
                           <div className="list-body-info">
                                <div className="input-label">NO. Of Toilets</div>
                                <h4>1</h4>
                           </div> 
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
)

export default List;