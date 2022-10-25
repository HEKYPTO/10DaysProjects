import React, { Suspense } from 'react'
import Lottie from "react-lottie-player";

import lottieJson from './components/loading.json'
import Header from './components/Header';
const MapApp = React.lazy(() => import('./MapApp'));




function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<Lottie
                animationData={lottieJson}
                loop
                play
                style={{ height: '100%', position: 'absolute', width: '100%' }}
            />}>
                <MapApp />
            </Suspense>
        </>
    )
}

export default App