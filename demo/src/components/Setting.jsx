import React from 'react';
import './Setting.css';
import { useState } from 'react'
import { FiSettings } from 'react-icons/fi'


function Setting() {
    const [open, setOpen] = useState(false);
    return (
        <div className='setting-wrapper'>
            <button open={open} onClick={() => setOpen(!open)} className='setting-button'>
                <FiSettings className='setting-icon' />
            </button>
        </div>
    );
}

export default Setting;
