import * as React from 'react';
import Map, { Marker, NavigationControl, Layer, Source } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { useState, useCallback } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Building from './components/Building';

function App() {
  const [isShown, setIsShown] = useState(false);
  let navigate = useNavigate();
  const handleClick = (id) => {
    console.log(id)
    setIsShown(true);
    let url = '/' + id
    navigate(url);
  }

  var sw = new maplibregl.LngLat(100.531233507, 13.7341619786);
  var ne = new maplibregl.LngLat(100.5350130035, 13.7379234343);
  var llb = new maplibregl.LngLatBounds(sw, ne);
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
        maxBounds={llb}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="https://api.maptiler.com/maps/7ea20431-de61-4eb1-a99e-626e0ec563a6/style.json?key=25qBairJjw1gb4U7DB8r"
      >
        <NavigationControl />
        <Marker longitude={100.53260118699939} latitude={13.736570093644485} onClick={() => { handleClick('ENG1') }}  anchor="bottom" scale='0'>
        
          <h1>ENG1</h1>
          
            
          {/* {isShown && <Building open={isShown} setOpen={setIsShown} name='ENG1'/>} */}
        </Marker>
        <Marker longitude={100.53338030663161} latitude={13.736455216088158} onClick={() => { handleClick('ENG2') }} anchor="bottom" scale='0'>
          <h1>ENG2</h1>
        </Marker>
        <Marker longitude={100.53311061102855} latitude={13.736983807465586} onClick={() => { handleClick('ENG3') }} anchor="bottom" scale='0'>
          <h1>ENG3</h1>
        </Marker>
        <Marker longitude={100.53385835924983} latitude={13.73594850574619} onClick={() => { handleClick('ENG4') }} anchor="bottom" scale='0'>
          <h1>ENG4</h1>
        </Marker>
        <Marker longitude={100.53397067699699} latitude={13.736398565496355} onClick={() => { handleClick('ENG100') }} anchor="bottom" scale='0'>
          <h1>ENG100</h1>
        </Marker>
      </Map>

    </div>);
}

export default App