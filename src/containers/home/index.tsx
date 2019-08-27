import React from 'react';

import Pagination from "../../components/pagination";
import Filter from '../../components/filter';
import Sort, {ISort} from '../../components/sort';
import Map from '../../components/map';
import List from '../../components/list';

import fetchApartments from '../../utils/apartments'
import { connect, IWithStore } from "../../flux/store";

interface IState {
    apartments: any[]
    apartmentsTotal: number
    currentArea: {
        lat: number
        lng: number
    },
    no_bed: number
    no_bath: number
    no_toilets: number
    sort: string
    resultsPerPage: number
    state: string
    searchText: string
    page: number
    max_price: number | null
    min_price: number | null
}

class Home extends React.PureComponent<IWithStore> {

    state: IState = {
        apartments: [],
        apartmentsTotal: 0,
        currentArea: {
            lat: 6.5005,
            lng: 3.3666
        },
        no_bed: 1,
        no_bath: 1,
        no_toilets: 1,
        sort: 'recent',
        resultsPerPage: 10,
        state: 'Lagos',
        max_price: null,
        min_price: null,
        searchText: "Yaba, Lagos, Nigeria",
        page: 1
    };

    componentDidMount() {
        this.setState({
            // @ts-ignore: __DATA__ does exist
            apartments: window.__DATA__.apartments,
            // @ts-ignore: __DATA__ does exist
            apartmentsTotal: window.__DATA__.apartmentsTotal
        });
    }

    centerChange = (center, searchText) => {
        this.setState({ 
            currentArea: {
                lat: center.lat(),
                lng: center.lng()
            },
            searchText
        }, this.updateApartments);
    };

    onSortChange = ({ results: resultsPerPage, sort }: ISort) => {
        this.setState({
            sort,
            resultsPerPage,
            page: this.state.resultsPerPage !== resultsPerPage ? 0 : this.state.page
        }, this.updateApartments);
    };

    onPaginationChange = async (page) => {
        this.setState({ page }, this.updateApartments);
    };

    handleFilterUpdate = ({ no_bed = 1, state, max_price, min_price }) => {
        this.props.dispatch({
           type: 'SET_FILTER',
            payload: {
                no_bed,
                state,
                max_price,
                min_price
            }
        });

        this.setState({
            no_bed,
            state,
            max_price,
            min_price
        }, this.updateApartments);
    };

    updateApartments = async () => {
        const {
            currentArea,
            no_bed,
            sort,
            page,
            resultsPerPage,
            max_price,
            min_price
        } = this.state;

        try {
            const { data: apartments = [] } = await fetchApartments({
                specs: { no_bed  },
                sort: sort,
                filter: {
                    max_price: typeof max_price === 'number' ? max_price: undefined,
                    min_price: typeof min_price === 'number' ? min_price: undefined,
                },
                location: { ...currentArea }
            }, page, resultsPerPage);

            this.setState({ apartments });
        } catch (e) {
            console.error(e);
        }
    };

    render () {
        const { apartments, apartmentsTotal } = this.state;

        return (
            <section className="main-section">
                <div className="listings-section">
                    <Filter onUpdate={this.handleFilterUpdate}>
                        {(data, FilterFields) => (
                            <>
                                <FilterFields />
                                <Sort onUpdate={this.onSortChange} />
                                <div>
                                    <ul className="lists">
                                        {apartments.map((data, index) => (<List data={data} key={`list-${index}`} />))}
                                    </ul>
                                </div>
                                <Pagination
                                    total={apartmentsTotal}
                                    itemsPerPage={10}
                                    onChange={this.onPaginationChange}
                                />
                            </>
                        )}
                    </Filter>
                </div>
                <div className="map-section">
                    <Map onCenterChange={this.centerChange} />
                </div>
            </section>
        );
    }   
}

const mapStateToProps = (state) => ({
    filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: () => dispatch()
});

export default connect(mapStateToProps)(Home);