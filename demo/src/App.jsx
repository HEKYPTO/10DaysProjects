import React from 'react'
import { useEffect, useState } from 'react';
import Lottie from "react-lottie";
import Search from './components/Search'
import MapDisplay from './components/MapDisplay'
import 'bootstrap/dist/css/bootstrap.min.css';
import Setting from './components/Setting';

import animationData from './components/loading.json'





function App() {

    const [isLoading, setLoading] = useState(true)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, []);

    return (
        <>
            <Search />
            <Setting />
            {!isLoading ? <MapDisplay /> : 
            <Lottie options={defaultOptions}
                height={400}
                width={400} />}

        </>
    )
}

export default App