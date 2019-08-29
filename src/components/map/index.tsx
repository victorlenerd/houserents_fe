import React from 'react';
import { compose, withProps }  from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {withMap, IWithMap, DEFAULT_ZOOM} from './withMap';

const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

const API_KEY = process.env.MAP_API_KEY || "AIzaSyD5nu1Pr0a26gdkbGmwPJr76fDMVe1EBdk";

const Map = compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=places`,
      containerElement: <div className="input-container map-container" />,
      loadingElement: <div style={{ height: `calc(100vh  - 80px)` }} />,
      mapElement: <div className="map-element" />,
      center: { lat: 25.03, lng: 121.6 },
    }),
    withMap,
    withScriptjs,
    withGoogleMap
)((props: IWithMap) => {
    return (
        <GoogleMap
            // @ts-ignore: Not sure were the GoogleMap is located
            ref={props.mapRef}
            defaultOptions={{
              disableDefaultUI: true,
            }}
            defaultZoom={DEFAULT_ZOOM}
            zoom={props.zoom}
            onZoomChanged={props.handleZoomChanged}
            defaultCenter={props.center}
        >
        <SearchBox
            ref={props.searchBoxRef}
            controlPosition={google.maps.ControlPosition.TOP_CENTER}
            onPlacesChanged={props.onPlacesChanged}
            defaultBounds={new google.maps.LatLngBounds(new google.maps.LatLng(6.6080, 3.6218))}
        >
        <input
          ref={props.searchInputRef}
          type="text"
          placeholder="Find apartments nearest to places like work."
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `90%`,
            height: `50px`,
            marginLeft: `10px`,
            marginTop: `10px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
        {props.markers.map(({ lat, lng }, index) => (
            <Marker
                key={`${index}`}
                position={{ lat, lng }}
                onClick={props.onPlacesChanged}
            >
            </Marker>
        ))}
    </GoogleMap>
    );
});

export default Map