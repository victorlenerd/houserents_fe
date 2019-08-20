import * as React from 'react';
import majorAreasData from '../../areas';

import Predict from '../../utils/predict';

interface IProps {
    no_bed: number
    no_bath: number
    no_toilets: number
    sort: string
}

interface IState {
    areas: IArea[]
    prices: []
}

interface IArea {
    "name": string,
    "lat": number,
    "lng": number
}

class Areas extends React.Component<IProps> {

    state: IState = {
        areas: [],
        prices: [],
    };
    
    componentDidMount() {
        this.setState({
            areas: majorAreasData(),
            // @ts-ignore: __DATA__ should be set
            prices: window.__DATA__.multipleAreasPrice
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
                {prices.length > 1 && <ul className="areas-list">
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