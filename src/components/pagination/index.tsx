import * as React from 'react';
import './index.css';

interface IProps {
    total: number
    itemsPerPage: number
    onChange: (page: number) => void
}

const Pagination: React.FunctionComponent<IProps> = ({ total, itemsPerPage, onChange }) => {
    const pageCounts = Math.ceil(total / itemsPerPage);
    const pageNumbers = [];

    for (let i = 0; i < pageCounts; i ++) {
        pageNumbers.push(i + 1);
    }

    return (
        <div className="pagination-container">
            <select data-testid="pagination-select"  onChange={(e) => onChange(Number(e.target.value))}>
                {pageNumbers.length > 0 && pageNumbers.map((pageNumber, index) => <option key={index} value={pageNumber}>{pageNumber}</option>)}
            </select>
            <div className="pagination-of">of {pageCounts}</div>
        </div>
    );
};

export default Pagination;