import React from 'react'
import { Marker } from 'react-map-gl';
import { useNavigate } from 'react-router-dom';

function MapMarker(data) {

    let navigate = useNavigate();


    const handleClick = (id) => {
        let url = '/building/' + id
        navigate(url);
    }
    var long = data['data']['longitude']
    var lat = data['data']['latitude']
    var name = data['data']['name']
    var offset = data['data']['offset']

    return (
        <div>
            <Marker offset={offset} longitude={long} latitude={lat} onClick={() => { handleClick( name ) }} anchor="bottom" scale='0'>
                <h1 className='map-marker'>{name}</h1>
            </Marker>
        </div>
    )
}

export default MapMarker