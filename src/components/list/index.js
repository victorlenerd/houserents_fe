import React from 'react';
import './index.css'
import bath from '../../assets/svg/bath.svg';
import toilet from '../../assets/svg/toilet.svg';
import bed from '../../assets/svg/bed.svg';
import people from '../../assets/svg/team.svg';
import pin from '../../assets/svg/pin.svg';

const List = () => (
    <div className="input-container col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
        <ul className="lists"> 
            <li>
                <div className="list-header">
                    <span className="list-price-tags">₦ 250,000</span>
                    <span className="list-source-tags">Propety Pro</span>
                </div>
                <div className="list-body">
                    <div className="list-body-title">
                        <img src={pin} className="pin-icon" />
                        <span>18 Agege Motor Road Lagos</span>
                    </div>
                    <p className="list-body-description">Well lit and spacious 3 Bedroom Apartment in the heart of Old Ikoyi. NGN 8.5m including service charge.</p>
                    <div className="list-body-content">
                        <div className="list-body-info">
                            <img src={bed} className="info-icon" />
                            <div className="info">
                                <div className="input-label">Bed</div>
                                <p>1</p>
                            </div>
                        </div>
                        <div className="list-body-info">
                            <img src={bath} className="info-icon" />
                            <div className="info">
                                <div className="input-label">Bath</div>
                                <p>1</p>
                            </div>
                        </div>
                        <div className="list-body-info">
                            <img src={toilet} className="info-icon" />
                            <div className="info">
                                <div className="input-label">Toilet</div>
                                <p>1</p>
                            </div>
                        </div> 
                        <div className="list-body-info">
                            <img src={people} className="info-icon" />
                            <div className="info">
                                <div className="input-label">Roomies</div>
                                <p>1</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="list-actions">
                    <a className="view-property-button">View Property</a>
                    <button className="connect-roomie-button">Match With A Roomie</button>
                </div>
            </li>
        </ul>
    </div>
)

export default List;