import * as React from 'react';
import './index.css';

// @ts-ignore: File does exist
import chevron from '../../assets/svg/right-thin-chevron.svg';
import {ApartmentsPayload, SetApartments} from "../../flux/actions/apartment";
import {connect} from "../../flux/store";


type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof  mapDispatchToProps>

const Pagination: React.FunctionComponent<Props> = ({ setApartments, apartments: { total, itemsPerPage, page: defaultPage } }) => {
    const pageCounts = Math.ceil(total / itemsPerPage);
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = React.useState(defaultPage);


    React.useEffect(() => {
        if (currentPage !== defaultPage) {
            setApartments({
                page: currentPage
            });
        }
    }, [currentPage]);

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
                    }
                }}>
                <img src={chevron} />
            </button>}
            <select
                data-testid="pagination-select"
                onChange={(e) => {
                    const page = Number(e.target.value);
                    setCurrentPage(page);
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
                    }
                }}>
                <img src={chevron} />
            </button>}
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    setApartments: (apartments: Partial<ApartmentsPayload>) => dispatch(SetApartments(apartments)),
});

const mapStateToProps = (state) => ({
    apartments: state.apartment
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);