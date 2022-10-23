import * as React from 'react';
import Map, { Marker, NavigationControl, Layer, Source } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import MapMarker from './MapMarker';
import './MapDisplay.css'
import "maplibre-gl/dist/maplibre-gl.css";

function MapDisplay() {
  var sw = new maplibregl.LngLat(100.531233507, 13.7341619786);
  var ne = new maplibregl.LngLat(100.5350130035, 13.7379234343);
  var llb = new maplibregl.LngLatBounds(sw, ne);

  const markers = [
    { name: 'ENG1', longitude: '100.53260118699939', latitude: '13.736570093644485', offset:[0,0]},
    {name: 'ENG2', longitude:'100.53338030663161' ,latitude:'13.736455216088158' , offset:[0,0]},
    {name: 'ENG3', longitude:'100.53311061102855' ,latitude:'13.736983807465586', offset:[-12,-5]},
    {name: 'ENG4', longitude:'100.53385835924983' ,latitude:'13.73594850574619' , offset:[0,0]},
    {name: 'ENG100', longitude:'100.53397067699699' ,latitude:'13.736398565496355' , offset:[0,0]},
  ]

  return (
    <div>
      <Map mapLib={maplibregl}
        initialViewState={{
          longitude: 100.53311061102855,
          latitude: 13.736983807465586,
          zoom: 18,
          pitch: 45,
          bearing: 190,
          antialias: true,
        }}
        maxZoom='20'
        maxBounds={llb}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="https://api.maptiler.com/maps/4a03b449-9034-4621-a191-9d748a7a96f1/style.json?key=25qBairJjw1gb4U7DB8r"
      >
        <NavigationControl />
        {markers.map(i => {
          return <MapMarker data={i} />
        })}
      </Map>

    </div>);
}

export default MapDisplay