import * as React from 'react'
import './index.css';


export interface ISort {
    sort: string
    results: number
}

interface IProps {
    onUpdate?: (ISort) => void;
}

const Sort: React.FunctionComponent<IProps> = ({ onUpdate }) => {
    const [sort, setSort] = React.useState({ sort: 'recent', results: 10 });

    const handleChange = (value: string) => (e) => {
        const val = e.currentTarget.value;

        const newSort = {
            ...sort,
            [value]: value === 'results' && val !== 'all' ? Number(val) : val
        };

        setSort(newSort);
        onUpdate(newSort);
    };

    return (
        <div className="sort-container">
            <div className="sort-box">
                <div className="input-label">Sort</div>
                <select
                    value={sort.sort}
                    name="price"
                    onChange={handleChange('sort')}>
                    <option value="recent">Most Recent</option>
                    <option value="price">Price</option>
                </select>
            </div>
            <div className="sort-box">
                <div className="input-label">Results</div>
                <select
                    value={sort.results}
                    name="results"
                    onChange={handleChange('results')}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="all">All</option>
                </select>
            </div>
        </div>
    );
};

export default Sort;