import * as React from 'react'
import './index.css';
import {ApartmentsPayload, SetApartments} from "../../flux/actions/apartment";
import {connect} from "../../flux/store";


type Props =  ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const Sort: React.FunctionComponent<Props> = ({ setApartments, apartments: { sort: defaultSort, itemsPerPage: defaultItemsPerPage } }) => {

    const [sort, setSort] = React.useState({ sort: defaultSort, itemsPerPage: defaultItemsPerPage });

    const handleChange = (value: string) => (e) => {
        const val = e.currentTarget.value;

        const newSort = {
            ...sort,
            [value]: value === 'itemsPerPage' && val !== 'all' ? Number(val) : val
        };

        setSort(newSort);
    };

    React.useEffect(() => {
        if (sort.sort !== defaultSort ||
            sort.itemsPerPage !== defaultItemsPerPage
        ) {
            setApartments( { ...sort });
        }
    }, [sort.sort, sort.itemsPerPage]);

    return (
        <div className="sort-container">
            <div className="sort-box">
                <div className="input-label">Sort</div>
                <select
                    value={sort.sort}
                    name="sort"
                    onChange={handleChange('sort')}>
                    <option value="recent">Most Recent</option>
                    <option value="price_high">High Price</option>
                    <option value="price_low">Low Price</option>
                </select>
            </div>
            <div className="sort-box">
                <div className="input-label">Results</div>
                <select
                    value={sort.itemsPerPage}
                    name="itemsPerPage"
                    onChange={handleChange('itemsPerPage')}>
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


const mapDispatchToProps = (dispatch) => ({
    setApartments: (apartments: Partial<ApartmentsPayload>) => dispatch(SetApartments(apartments)),
});

const mapStateToProps = (state) => ({
    apartments: state.apartment
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
