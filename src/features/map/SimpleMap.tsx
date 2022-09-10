import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

interface IAnyReactComponent {
    lat?: number,
    lng?: number,
    text?: string
}

const AnyReactComponent = ({lat, lng, text }: IAnyReactComponent) => <div>{text}</div>;

const SimpleMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API!
      })
      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            //onLoad={onLoad}
            //onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
      ) : <></>
    }

export default SimpleMap