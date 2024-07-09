import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function LandingLayout() {

    const [ headerHeight, setHeaderHeight ] = useState(0)

    useEffect(() => {
        const header = document.getElementById('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    return (
    
        <>
        
            <Header/>

            <main style={{marginTop: headerHeight}}>
                <Outlet/>
            </main>

        </>
    
    )

}

export default LandingLayout