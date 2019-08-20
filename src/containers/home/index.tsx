import React from 'react';

import Pagination from "../../components/pagination";
import Filter from '../../components/filter';
import Map from '../../components/map';
import List from '../../components/list';

import fetchApartments from '../../utils/apartments'

interface IState {
    apartments: any[],
    apartmentsTotal: number,
    currentArea: {
        lat: number,
        lng: number
    },
    no_bed: number,
    no_bath: number,
    no_toilets: number,
    sort: string;
    searchText: string,
    page: number
}

class Home extends React.PureComponent {

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
        sort: 'DESC',
        searchText: "Yaba, Lagos, Nigeria",
        page: 1
    };

    componentDidMount() {
        this.setState({
            apartments: window.__DATA__.apartments,
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

    sort = (type) => {
        let pairAreaPrice = this.state.apartments.map((A, i)=> ({
            a: A,
            p: this.state.apartments[i]
        }));
        
        let sortedPairs = (type !== 'high') ? 
            pairAreaPrice.sort((a, b) => a.p - b.p) : 
            pairAreaPrice.sort((a, b) => b.p - a.p);

        this.setState({
            prices: sortedPairs.map((sp) => sp.p),
            apartments: sortedPairs.map((sp) => sp.a)
        });
    };

    onPaginationChange = async (page) => {
        this.setState({ page }, this.updateApartments);
    };

    handleFilterUpdate = ({ no_bed = 1, no_bath = 1, no_toilets = 1, sort }) => {
        this.setState({
            no_bed,
            no_bath,
            no_toilets,
            sort
        }, this.updateApartments);
    };

    updateApartments = async () => {
        const { currentArea, no_bath, no_bed, no_toilets, sort, page } = this.state;

        try {
            const { data: apartments = [] } = await fetchApartments({
                specs: { no_bath, no_bed, no_toilets },
                sort: { price: sort },
                location: { ...currentArea }
            }, page, 10);

            this.setState({ apartments });
        } catch (e) {
            console.error(e);
        }
    };

    render () {
        const { apartments, apartmentsTotal } = this.state;

        return (
            <section>
                <div className="container">
                    <Map onCenterChange={this.centerChange} />
                    <Filter onUpdate={this.handleFilterUpdate}>
                        {(data, FilterFields) => (
                            <>
                                <FilterFields />
                                <div className="input-container col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
                                    <ul className="lists">
                                        {apartments.map((data, index) => (<List data={data} key={`list-${index}`} />))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </Filter>
                </div>
                <Pagination
                    total={apartmentsTotal}
                    itemsPerPage={10}
                    onChange={this.onPaginationChange}
                />
            </section>
        );
    }   
}

export default Home;