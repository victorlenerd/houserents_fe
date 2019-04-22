import React from 'react';
import Filter from '../components/filter';
import Footer from '../components/footer';

import majorAreasData from '../areas';

import Predict from '../utils/predict';
import $ from 'jquery';

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
    }
    
    componentDidMount () {    
        this.setState({
            areas: majorAreasData()
        }, () => {
            this.getAddressRange();
            this.getAreasRange();
        });
    
        $(window).on('scroll', function () { 
          $(".header").css("top", $(this).scrollTop() * .5);
        });
    }
    
    getAreasRange = async () => {
        const { no_bed, no_bath, no_toilets, mode } = this.state;
    
        const { prices } = await Predict({ 
            locations: this.state.areas.map(({ lat, lng }) => ({ lat, lng })), 
            specs: { no_bed, no_bath, no_toilets }
        }, mode);
    
        this.setState({
            prices: prices.map((P) => Math.round(P))
        });
    }
    
    getAddressRange = async () => {
        const { tno_bed: no_bed, tno_bath: no_bath, tno_toilets: no_toilets, currentArea: { lat, lng }, mode } = this.state;
    
        const { prices } = await Predict({ 
            locations: [{ lat, lng }], 
            specs: { no_bed, no_bath, no_toilets }
        }, mode);
    
        this.setState({
            areaPrice:  Math.round(prices[0])
        });
    }
    
    updateOption = (e, topFilter) => {
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
    
    handleChange = () => {
        this.setState({
            mode: !this.state.mode
        }, () => {
            this.getAddressRange();
            this.getAreasRange();
        });
    }
    
    centerChange = center => {
        this.setState({ 
        currentArea: {
            lat: center.lat(),
            lng: center.lng()
        }
        }, this.getAddressRange);
    }
    
    sort = (e) => {
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

    render () {
        const { areas, prices } = this.state;

        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <Filter showSort={true} sort={this.sort} updateOption={this.updateOption} />
                        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">              
                            <div className="input-container col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Areas;