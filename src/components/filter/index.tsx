import * as React from 'react';

import './index.css';

interface IProps {
    onUpdate: (state: IState) => void,
    children: (state: IState, filter: React.ElementType) => React.ReactNode
}

interface IState {
    no_bed: number
    no_bath: number
    no_toilets: number
    state: string
    max_price: number | null
    min_price: number | null
}

const getOptions = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((o, i) => (<option key={i} value={o}>{o}</option>));
const priceOptions = () => [
    0,
    100000,
    250000,
    500000,
    750000,
    1000000,
    2000000,
    5000000,
    10000000,
    20000000,
    40000000,
    60000000,
    80000000,
    100000000,
    150000000,
].map((o, i) => (o === 0 ? <option key={i} value={o}></option> : <option key={i} value={o}>₦ {o.toLocaleString()}</option>));

class Filter extends React.PureComponent<IProps> {

    state: IState = {
        no_bed: 1,
        no_bath: 1,
        no_toilets: 1,
        max_price: null,
        min_price: null,
        state: 'Lagos',
    };

    updateOption = (e) => {
        let name =  e.target.name;
        let value = e.target.value; 

        this.setState({
            [name]: value.trim().length > 0 ? Number(value): null
        });
    };

    applyOptions = () => {
        if (this.props.onUpdate) this.props.onUpdate(this.state);
    };

    Filter = () => (
        <div className={"input-container filter-main"}>
            <div className={"filter-container"}>
                <div className={"filter-column"}>
                    <div className="input-label">Beds</div>
                    <select onChange={this.updateOption} name="no_bed">
                    {getOptions()}
                    </select>
                </div>
                <div className="filter-column">
                    <div className="input-label">State</div>
                    <select name="state" onChange={this.updateOption}>
                        <option value={"Lagos"}>Lagos</option>
                    </select>
                </div>
                <div className="filter-column">
                    <div className="input-label">Min Price</div>
                    <select name="min_price" onChange={this.updateOption}>
                        {priceOptions()}
                    </select>
                </div>
                <div className="filter-column">
                    <div className="input-label">Max Price</div>
                    <select name="max_price" onChange={this.updateOption}>
                        {priceOptions()}
                    </select>
                </div>
                <div className="filter-column">
                    <button className="apply-button" onClick={() => this.props.onUpdate(this.state)}>Search</button>
                </div>
            </div>
        </div>
    );

    render() {
        if (typeof this.props.children !== 'function') return null;
        return (this.props.children(this.state, this.Filter));
    }
}


export default Filter;
