import React from 'react';

const getOptions = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((o, i) => {
    return (<option key={i} value={o}>{o}</option>);
});

const Filter = (props) => (
    <div className={"input-container col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12"}>
        <div className={"col-lg-3 col-md-3 col-sm-3 col-xs-3"}>
            <div className="input-label">Beds</div>
            <select onChange={props.updateOption} name="no_bed">
            {getOptions()}
            </select>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="input-label">Baths</div>
            <select onChange={props.updateOption} name="no_bath">
            {getOptions()}
            </select>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="input-label">Toilets</div>
            <select onChange={props.updateOption} name="no_toilets">
            {getOptions()}
            </select>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="input-label">Sort</div>
            <select name="sort" onChange={props.sort}>
                <option value="high">High</option>
                <option value="low">Low</option>
            </select>
        </div>
    </div>
);

export default Filter;
