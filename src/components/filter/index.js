import React from 'react';
import PropTypes from 'prop-types';
import { hot } from "react-hot-loader";

const getOptions = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((o, i) => {
    return (<option key={i} value={o}>{o}</option>);
});


class Filter extends React.PureComponent {
    
    constructor(props) {
        super(props);

        this.state = {
            no_bed: 1,
            no_bath: 1,
            no_toilets: 1,
            sort: 'DESC',
        };

        this.updateOption = this.updateOption.bind(this);
    }

    updateOption(e)  {
        let name =  e.target.name;
        let value = e.target.value; 
    
        this.setState({
            [name]: name === 'sort' ? value : Number(value)
        }, () => {
            if (this.props.onUpdate) this.props.onUpdate(this.state)
        });
    }

    Filter = () => (
        <div className={"input-container col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12"}>
            <div className={"col-lg-3 col-md-3 col-sm-3 col-xs-12"}>
                <div className="input-label">Beds</div>
                <select onChange={this.updateOption} name="no_bed">
                {getOptions()}
                </select>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="input-label">Baths</div>
                <select onChange={this.updateOption} name="no_bath">
                {getOptions()}
                </select>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="input-label">Toilets</div>
                <select onChange={this.updateOption} name="no_toilets">
                {getOptions()}
                </select>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="input-label">Sort</div>
                <select name="sort" onChange={this.updateOption}>
                    <option value="DESC">High</option>
                    <option value="ASC">Low</option>
                </select>
            </div>
        </div>
    );

    render() {
        if (typeof this.props.children !== 'function') return null;
        return (this.props.children(this.state, this.Filter));
    }
}

Filter.propTypes = {
    onUpdate: PropTypes.func,
    children: PropTypes.func
};


export default hot(module)(Filter);
