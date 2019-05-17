import React from 'react';
import majorAreasData from '../../areas';

import Predict from '../../utils/predict';

class Areas extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            no_bed: 1,
            no_bath: 1,
            no_toilets: 1,
    
            tno_bed: 1,
            tno_bath: 1,
            tno_toilets: 1,
    
            currentArea: {
                lat: 6.5005,
                lng: 3.3666
            },
            prices: [],
            areaPrice: 0,
            mode: true,
            sort: 'high',
        }

        this.getAreasRange = this.getAreasRange.bind(this);
        this.getAddressRange = this.getAddressRange.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.centerChange = this.centerChange.bind(this);
        this.sort = this.sort.bind(this);
    }
    
    componentDidMount () {    
        this.setState({
            areas: majorAreasData()
        }, () => {
            this.getAddressRange();
            this.getAreasRange();
        });
    }
    
    async getAreasRange() {
        const { no_bed, no_bath, no_toilets, mode } = this.state;
    
        const { prices } = await Predict({ 
            locations: this.state.areas.map(({ lat, lng }) => ({ lat, lng })), 
            specs: { no_bed, no_bath, no_toilets }
        }, mode);
    
        this.setState({
            prices: prices.map((P) => Math.round(P))
        });
    }
    
    async getAddressRange() {
        const { tno_bed: no_bed, tno_bath: no_bath, tno_toilets: no_toilets, currentArea: { lat, lng }, mode } = this.state;
    
        const { prices } = await Predict({ 
            locations: [{ lat, lng }], 
            specs: { no_bed, no_bath, no_toilets }
        }, mode);
    
        this.setState({
            areaPrice:  Math.round(prices[0])
        });
    }
    
    updateOption(e, topFilter) {
        let name = (!topFilter) ? e.target.name : `t${e.target.name}`;
        let value = e.target.value; 
    
        this.setState({
            [name]: value
        }, () => {
            setTimeout(
                (!topFilter) ? this.getAreasRange : this.getAddressRange
            , 500);
        });
    }
    
    handleChange() {
        this.setState({
            mode: !this.state.mode
        }, () => {
            this.getAddressRange();
            this.getAreasRange();
        });
    }
    
    centerChange(center) {
        this.setState({ 
        currentArea: {
            lat: center.lat(),
            lng: center.lng()
        }
        }, this.getAddressRange);
    }
    
    sort(e) {
        let type = e.target.value;
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

export default Areas;