import React from 'react'
import Search from './components/Search'
import MapDisplay from './components/MapDisplay'
import 'bootstrap/dist/css/bootstrap.min.css';

import SettingBar from './components/SettingBar';

function App() {
    return (
        <>
            <Search/>
            <SettingBar/>
            <MapDisplay/>
        </>
    )
}

export default App