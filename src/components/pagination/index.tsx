import * as React from 'react';
import './index.css';

// @ts-ignore: File does exist
import chevron from '../../assets/svg/right-thin-chevron.svg';

interface IProps {
    total: number
    itemsPerPage: number
    onChange: (page: number) => void
}

const Pagination: React.FunctionComponent<IProps> = ({ total, itemsPerPage, onChange }) => {
    const pageCounts = Math.ceil(total / itemsPerPage);
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = React.useState(1);

    for (let i = 0; i < pageCounts; i ++) {
        pageNumbers.push(i + 1);
    }

    return (
        <div className="pagination-container">
            {(currentPage > 1) && <button
                className="pagination-prev-btn"
                onClick={() => {
                    const prevPage = currentPage - 1;
                    if (prevPage > 0) {
                        setCurrentPage(prevPage);
                        onChange(prevPage);
                    }
                }}>
                <img src={chevron} />
            </button>}
            <select
                data-testid="pagination-select"
                onChange={(e) => {
                    const page = Number(e.target.value);
                    setCurrentPage(page);
                    onChange(page);
                }}
                value={currentPage}
            >
                {pageNumbers.length > 0 && pageNumbers.map((pageNumber, index) => <option key={index} value={pageNumber}>{pageNumber}</option>)}
            </select>
            <div className="pagination-of">of {pageCounts}</div>
            {(currentPage < pageCounts) && <button
                className="pagination-next-btn"
                onClick={() => {
                    const nextPage = currentPage + 1;
                    if (nextPage < total) {
                        setCurrentPage(nextPage);
                        onChange(nextPage);
                    }
                }}>
                <img src={chevron} />
            </button>}
        </div>
    );
};

export default Pagination;