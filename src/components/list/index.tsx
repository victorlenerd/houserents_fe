import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import bath from '../../assets/svg/bath.svg';
import toilet from '../../assets/svg/toilet.svg';
import bed from '../../assets/svg/bed.svg';

const List = ({ data: { price, address, description, no_bath, no_bed, no_toilets, url, source } }) => (
    <li className="input-container">
        <div className="list-header">
            <div className="list-body-title">
                <span>
                    <a href={source === "nigerian_property_center" ? `https://www.nigeriapropertycentre.com${url}` : `https://www.propertypro.ng${url}`} target='_blank'>
                        {address}
                    </a>
                </span>
            </div>
            <span className="list-price-tags">₦{price.toLocaleString('en')}</span>
        </div>
        <div className="list-body">
            <p className="list-body-description">{description.substring(0, 200)}</p>
            <div className="list-body-content">
                <div className="list-body-info">
                    <img src={bed} className="info-icon" />
                    <div className="info">
                        <div className="input-label">Bed</div>
                        <p>{no_bed}</p>
                    </div>
                </div>
                <div className="list-body-info">
                    <img src={bath} className="info-icon" />
                    <div className="info">
                        <div className="input-label">Bath</div>
                        <p>{no_bath}</p>
                    </div>
                </div>
                <div className="list-body-info">
                    <img src={toilet} className="info-icon" />
                    <div className="info">
                        <div className="input-label">Toilet</div>
                        <p>{no_toilets}</p>
                    </div>
                </div> 
            </div>
        </div>
    </li>
)

List.propTypes = {
    data: PropTypes.object
}

export default List;