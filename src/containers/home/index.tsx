import React from 'react';

import Pagination from "../../components/pagination";
import Filter from '../../components/filter';
import Sort from '../../components/sort';
import Map from '../../components/map';
import List from '../../components/list';

import fetchApartments from '../../utils/apartments'
import { connect, shallowCompare } from "../../flux/store";
import {ApartmentsPayload, SetApartments} from "../../flux/actions/apartment";
import {Filter as FilterPayload} from "../../flux/actions/filter";


type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof  mapDispatchToProps>;

class Home extends React.PureComponent<Props> {

    componentDidMount() {
        this.props.setApartments({
            // @ts-ignore: __DATA__
            apartments: window.__DATA__.apartments,
            // @ts-ignore: __DATA__
            total: window.__DATA__.apartmentsTotal
        });
    }

    async componentDidUpdate(prevProps) {
        const apartmentsUpdate = shallowCompare<ApartmentsPayload>({ ...this.props.apartments, total: undefined }, { ...prevProps.apartments, total: undefined  });
        const filterUpdate = shallowCompare<FilterPayload>(prevProps.filter, this.props.filter);
        if (apartmentsUpdate || filterUpdate) {
            await this.updateApartments(filterUpdate);
        }
    }

    updateApartments = async (resetOffset: boolean = false) => {
        const {
            filter: {
                no_bed,
                max_price,
                min_price
            },
            apartments: {
                sort,
                page,
                currentArea,
                itemsPerPage
            }
        } = this.props;

        try {
            const { data: apartments = [], total } = await fetchApartments({
                specs: { no_bed },
                sort: sort,
                filter: {
                    max_price: typeof max_price === 'number' ? max_price: undefined,
                    min_price: typeof min_price === 'number' ? min_price: undefined,
                },
                location: { ...currentArea }
            }, resetOffset ? 0 : page, itemsPerPage);

            this.props.setApartments({
                apartments,
                total,
                page: resetOffset ? 0 : page
            });
        } catch (e) {
            console.error(e);
        }
    };

    render () {
        const { apartments: { total, apartments, itemsPerPage } } = this.props;

        return (
            <section className="main-section">
                <div className="listings-section">
                    <Filter onUpdate={this.updateApartments} />
                    <Sort />
                    <div>
                        <ul className="lists">
                            {apartments.map((data, index) => (<List data={data} key={`list-${index}`} />))}
                        </ul>
                    </div>
                    <Pagination
                        total={total}
                        itemsPerPage={itemsPerPage}
                        onChange={this.updateApartments}
                    />
                </div>
                <div className="map-section">
                    <Map />
                </div>
            </section>
        );
    }   
}

const mapDispatchToProps = (dispatch) => ({
    setApartments: (apartments: Partial<ApartmentsPayload>) => dispatch(SetApartments(apartments)),
});

const mapStateToProps = (state) => ({
    filter: state.filter,
    apartments: state.apartment
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);