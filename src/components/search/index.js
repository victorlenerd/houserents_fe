import React from 'react';
import { hot } from "react-hot-loader";
import PropTypes from 'prop-types';
import Map from '../map';

import Predict from '../../utils/predict';

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentArea: {
                lat: 6.5005,
                lng: 3.3666
            },
            searchText: 'Yaba, Lagos, Nigeria',
            areaPrice: 0,
        }
    
        this.getAddressRange = this.getAddressRange.bind(this);
        this.centerChange = this.centerChange.bind(this);
    }

    componentDidMount () {    
        this.setState({
            areaPrice: window.__DATA__.singleAreaPrice,
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.no_bath !== prevProps.no_bath || 
            this.props.no_bed !== prevProps.no_bed ||
            this.props.no_toilets !== prevProps.no_toilets) {
            this.getAddressRange(this.props.no_bed, this.props.no_bath, this.props.no_toilets);
        }
    }
    
    async getAddressRange (no_bed = 1, no_bath = 1, no_toilets = 1) {
        const { currentArea: { lat, lng }  } = this.state;
    
        const { prices } = await Predict({
            locations: [{ lat, lng }], 
            specs: { no_bed, no_bath, no_toilets }
        });
    
        this.setState({
            areaPrice:  Math.round(prices[0])
        });
    }
    
    
    centerChange(center, searchText) {
        this.setState({ 
            currentArea: {
                lat: center.lat(),
                lng: center.lng()
            },
            searchText
        }, this.getAddressRange);
    }

    render() {
        const { areaPrice, searchText } = this.state;
        const { no_bed, no_bath, no_toilets } = this.props;
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 hidden-xs">
                <Map onCenterChange={this.centerChange} />
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 input-container">
                    <div className="price-top">
                        <span style={{ color: '#000' }}>
                            {no_bed} { no_bed > 1 ? ' bed rooms' : ' bed room'}, 
                            {no_bath} { no_bath > 1 ? ' bath rooms' : ' bath room'}, 
                            {no_toilets} { no_toilets > 1 ? ' toilets' : ' toilet '}
                            <br />
                            within <em>{searchText}</em>
                        </span>
                        <h2>₦{parseFloat(areaPrice).toLocaleString('en')}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    no_bed: PropTypes.number, 
    no_bath: PropTypes.number,
    no_toilets: PropTypes.number,
};

export default hot(module)(Search);