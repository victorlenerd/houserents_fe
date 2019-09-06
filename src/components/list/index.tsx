import * as  React from 'react';
import './index.css'
import { formatDistanceToNow } from 'date-fns'
// @ts-ignore: files exist
import bath from '../../assets/svg/bath.svg';
// @ts-ignore: files exist
import toilet from '../../assets/svg/toilet.svg';
// @ts-ignore: files exist
import bed from '../../assets/svg/bed.svg';

interface IProps {
    data: {
        price: number
        address: string
        description: string
        no_bath: number
        no_bed: number
        no_toilets: number
        date_added: string
        url: number
        source: string
    }
}

const List: React.FunctionComponent<IProps> = ({ data: { price, address, description, no_bath, no_bed, no_toilets, url, source, date_added } }) => (
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
            <p>{formatDistanceToNow(new Date(date_added), { addSuffix: true })}</p>
            <p className="list-body-description">{description.length > 200 ? `${description.substring(0, 200)}...` : description}</p>
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
);

export default List;