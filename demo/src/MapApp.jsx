import React from 'react'
import Setting from './components/Setting';
import Search from './components/Search'
import MapDisplay from './components/MapDisplay'
import 'bootstrap/dist/css/bootstrap.min.css';

import './MapApp.css'


function MapApp() {
    return (
        <div className='mapapp-wrapper'>
            <Search />
            <Setting />
            <MapDisplay />
        </div>
    )
}

export default MapApp