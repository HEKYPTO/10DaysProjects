import * as React from 'react';
import Map, { Marker, NavigationControl, Layer, Source } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import {useState, useCallback} from 'react';

function App() {

  const handleClick = () => {
    console.log('Easy pz')
  }
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [100.53311061102855, 13.736983807465586]}}
    ]
  };
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 100,
      'circle-color': '#007cbf'
    }
  };

  const onClick = useCallback(event => {
    const feature = event.features && event.features[0];
    console.log(feature)
      window.alert('Clicked layer test'); // eslint-disable-line no-alert
  }, []);
  // 100.531233507,13.7341619786,100.5350130035,13.7379234343
  var sw = new maplibregl.LngLat(100.531233507, 13.7341619786);
  var ne = new maplibregl.LngLat(100.5350130035, 13.7379234343);
  var llb = new maplibregl.LngLatBounds(sw, ne);
  return (
    <div>
      <Map mapLib={maplibregl}
        // onClick={onClick}
        initialViewState={{
          longitude: 100.53311061102855,
          latitude: 13.736983807465586,
          zoom: 18,
          pitch: 45,
          bearing: 190,
          antialias: true,
        }}
        maxBounds={llb}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=25qBairJjw1gb4U7DB8r"
      >
        <NavigationControl />
        <Marker longitude={100.53311061102855} latitude={13.736983807465586} onClick={handleClick} />
        <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle}  onClick={handleClick}/>
      </Source>
      </Map>

    </div>);
}

export default App