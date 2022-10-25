import React from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import './Search.css'

function Search() {
    let navigate = useNavigate()
    const handleChange = (value) => {
        if (value !== null) {
            let url = '/building/' + value['alt']
            navigate(url);
        }
    }
    const buildings = [
        { label: 'Engineering Building 1', alt: 'ENG1' },
        { label: 'Engineering Building 2', alt: 'ENG2' },
        { label: 'Engineering Building 3', alt: 'ENG3' },
        { label: 'Engineering Building 4', alt: 'ENG4' },
        { label: 'Engineering Building 100', alt: 'ENG100' }
    ];

    return (
        <div className='react-select-wrapper'>
            <Select className='react-select-container' options={buildings} isClearable={true} value={null} onChange={(inputValue) => { handleChange(inputValue)}} />
        </div>
    );
}

export default Search