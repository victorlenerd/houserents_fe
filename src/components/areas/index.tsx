import React from 'react';
import PropTypes from 'prop-types';
import majorAreasData from '../../areas';

import Predict from '../../utils/predict';

class Areas extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            areas: [],
            prices: [],
        }

        this.getAreasRange = this.getAreasRange.bind(this);
        this.sort = this.sort.bind(this);
    }
    
    componentDidMount () {    
        this.setState({
            areas: majorAreasData(),
            prices: window.__DATA__.multipleAreasPrice,
        });
    }

    componentDidUpdate(prevProps) {
        if  (this.props.sort !== prevProps.sort) {
            this.sort(this.props.sort);
        }

        if (this.props.no_bath !== prevProps.no_bath || 
            this.props.no_bed !== prevProps.no_bed ||
            this.props.no_toilets !== prevProps.no_toilets) {
            this.getAreasRange({
                no_bed: this.props.no_bed,
                no_bath: this.props.no_bath,
                no_toilets: this.props.no_toilets
            });
        }
    }
    
    async getAreasRange({ no_bed, no_bath, no_toilets }) {
        const { prices } = await Predict({
            locations: this.state.areas.map(({ lat, lng }) => ({ lat, lng })), 
            specs: { no_bed, no_bath, no_toilets }
        });
    
        this.setState({
            prices: prices.map((P) => Math.round(P))
        });
    }
    
    sort(type) {
        let pairAreaPrice = this.state.areas.map((A, i)=> ({ a: A, p: this.state.prices[i]}))
        
        let sortedPairs = (type !== 'high') ? 
            pairAreaPrice.sort((a, b) => a.p - b.p) : 
            pairAreaPrice.sort((a, b) => b.p - a.p);

        this.setState({
            prices: sortedPairs.map((sp) => sp.p),
            areas: sortedPairs.map((sp) => sp.a)
        });
    }

    render() {
        const { areas, prices } = this.state;

        return (
            <div className="input-container col-lg-6 col-md-6 col-sm-6 col-xs-12">        
                {prices.length > 1 && <ul className="areas-list" type="none">
                    {areas.map((a, i) => {
                        const parsedPrice = parseFloat(prices[i]);
                        
                        if (parsedPrice < 1) return null;

                        return (
                            <li key={i}>
                                {a.name}
                                <div className="price">
                                    <span>₦{parsedPrice.toLocaleString('en')}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>}
            </div>
        );
    }
}

Areas.propTypes = {
    no_bed: PropTypes.number, 
    no_bath: PropTypes.number,
    no_toilets: PropTypes.number,
    sort: PropTypes.string
}

export default Areas;