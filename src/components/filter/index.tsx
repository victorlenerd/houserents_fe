import * as React from 'react';
import {connect, shallowCompare} from '../../flux/store';
import { SetFilter, Filter as FilterPayload } from '../../flux/actions/filter';

import './index.css';

interface IProps {
    onUpdate: (resetOffset: boolean) => void
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


const mapStateToProps = (state) => ({
    filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter) => dispatch(SetFilter(filter))
});


type Props = IProps & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

class Filter extends React.PureComponent<Props> {

    public state = {
        no_bed: this.props.filter.no_bed,
        state: this.props.filter.state,
        min_price: this.props.filter.min_price,
        max_price: this.props.filter.max_price,
    };

    updateOption = (e) => {
        let name =  e.target.name;
        let value = e.target.value;

        this.setState({
            ...this.state,
            [name]: value.trim().length > 0 ? Number(value): null
        }, () => {
            if (shallowCompare<FilterPayload>(this.state, this.props.filter)) {
                this.props.setFilter(this.state);
            }
        });
    };

    render() {
        const { no_bed, max_price, min_price, state } = this.state;

        return (
            <div className={"input-container filter-main"}>
                <div className={"filter-container"}>
                    <div className={"filter-column"}>
                        <div className="input-label">Beds</div>
                        <select value={no_bed} onChange={this.updateOption} name="no_bed">
                            {getOptions()}
                        </select>
                    </div>
                    <div className="filter-column">
                        <div className="input-label">State</div>
                        <select name="state" value={state} onChange={this.updateOption}>
                            <option value={"Lagos"}>Lagos</option>
                        </select>
                    </div>
                    <div className="filter-column">
                        <div className="input-label">Min Price</div>
                        <select value={min_price} name="min_price" onChange={this.updateOption}>
                            {priceOptions()}
                        </select>
                    </div>
                    <div className="filter-column">
                        <div className="input-label">Max Price</div>
                        <select value={max_price} name="max_price" onChange={this.updateOption}>
                            {priceOptions()}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
