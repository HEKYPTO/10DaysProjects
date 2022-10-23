import React from 'react'
import Search from './components/Search'
import MapDisplay from './components/MapDisplay'
import 'bootstrap/dist/css/bootstrap.min.css';
import Setting from './components/Setting';


function App() {
    
    return (
        <>
            <Search/>
            <Setting/>
            <MapDisplay/>
        </>
    )
}

export default App