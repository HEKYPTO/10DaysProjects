import React from 'react'
import './Header.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate , useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

function Header() {
    const [head,setHead] = useState(undefined)
    let Id = useParams();
    var name = Id.Id
    useEffect(() => {
        if (name == undefined) {
            setHead('Intania Map')
        }
        else {
            setHead(name)
        }
    },[Id])
    
    let navigate = useNavigate()
    const handleReturn = () => {
        navigate('/')

    }
    return (
        <div className='header-wrapper'>
            <div className='header-button-place'>
                <button className='header-button' onClick={handleReturn}>
                    <IoIosArrowBack />
                </button>
            </div>
            <div className='header-text'>
                {head}
            </div>
        </div>
    )
}

export default Header