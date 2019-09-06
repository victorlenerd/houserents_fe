import * as React from 'react';
import {connect, shallowCompare} from "../../flux/store";

import {ApartmentsPayload, SetApartments} from "../../flux/actions/apartment";

type Props = { onCenterChange: (places: any, searchTxt: string) => void } & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const mapDispatchToProps = (dispatch) => ({
    setApartments: (apartments: Partial<ApartmentsPayload>) => dispatch(SetApartments(apartments)),
});

const mapStateToProps = (state) => ({
    apartments: state.apartment
});


export interface IWithMap extends ApartmentsPayload {
    center: {
        lat: number,
        lng: number
    },
    zoom: number,
    handleZoomChanged: () => void
    markers: Partial<ApartmentsPayload & { lat: number, lng: number }>[]
    mapRef: React.LegacyRef<google.maps.Map>
    searchInputRef: React.LegacyRef<HTMLInputElement>
    searchBoxRef: React.LegacyRef<google.maps.places.SearchBox>
    onPlacesChanged: (p) => void
}

export const DEFAULT_ZOOM = 12;

export const withMap = (Component) => {
    class WithMap extends React.Component<Props> {

        public mapRef = React.createRef<google.maps.Map>();
        public searchInputRef = React.createRef<HTMLInputElement>();
        public searchBoxRef = React.createRef<google.maps.places.SearchBox>();

        public state = {
            zoom: DEFAULT_ZOOM
        };

        public componentDidUpdate(prevProps) {
            const apartmentUpdate = shallowCompare<ApartmentsPayload>(this.props.apartments, prevProps.apartments);

            if (this.mapRef.current && this.mapRef.current.getZoom() !== DEFAULT_ZOOM) {
                if (apartmentUpdate) {
                    this.setState({
                        zoom: DEFAULT_ZOOM
                    });
                }
            }
        }

        public onPlacesChanged = () => {
            const places = this.searchBoxRef.current.getPlaces();

            if (places && places.length > 0) {
                const place = places[0].geometry.location;
                this.mapRef.current.panTo(place);
                this.props.setApartments({
                    searchText: this.searchInputRef.current.value,
                    currentArea: {
                        lat: place.lat(),
                        lng: place.lng()
                    }
                });
            }
        };


        public handleZoomChanged = (zoom) => {
            this.setState({
                zoom: this.mapRef.current.getZoom()
            });
        };

        public getMarkers = () => this.props.apartments.apartments
            .map(({ latlng, price, no_bed, no_bath, no_toilets, address }) => ({
                address,
                lat: Number(latlng.split(' ')[0].replace('POINT(', '')),
                lng: Number(latlng.split(' ')[1].replace(')', '')),
                price,
                no_bed,
                no_bath,
                no_toilets
            }));

        public render() {
            return (
                <Component
                    {...this.props}
                    zoom={this.state.zoom}
                    markers={this.getMarkers()}
                    center={this.props.apartments.currentArea}
                    mapRef={this.mapRef}
                    searchInputRef={this.searchInputRef}
                    searchBoxRef={this.searchBoxRef}
                    handleZoomChanged={this.handleZoomChanged}
                    onPlacesChanged={this.onPlacesChanged}
                />
            )
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(WithMap);
};