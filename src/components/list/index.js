import React from 'react';
import './index.css'

const List = () => (
    <section className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
        <div className="input-container col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ul className="lists"> 
                <li>
                    <div className="list-header">
                        <span className="list-price-tags">₦ 250,000</span>
                        <span className="list-source-tags">Propety Pro</span>
                    </div>
                    <div className="list-body">
                        <div className="list-body-title">
                            <h4>18 Agege Motor Road Lagos</h4>
                        </div>
                        <p >Well lit and spacious 3 Bedroom Apartment in the heart of Old Ikoyi. NGN 8.5m including service charge.</p>
                        <div className="list-body-content">
                           <div className="list-body-info">
                                <div className="input-label">Bed</div>
                                <h4>1</h4>
                           </div>
                           <div className="list-body-info">
                                <div className="input-label">Bath</div>
                                <h4>1</h4>
                           </div>
                           <div className="list-body-info">
                                <div className="input-label">Toilet</div>
                                <h4>1</h4>
                           </div> 
                           <div className="list-body-info">
                                <div className="input-label">Roomies</div>
                                <h4>1</h4>
                           </div> 
                        </div>
                    </div>
                    <div className="list-actions">
                        <a className="view-property-button">View Property</a>
                        <button className="connect-roomie-button">Find A Roomie</button>
                    </div>
                </li>
            </ul>
        </div>
    </section>
)

export default List;