import React from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';



function Search() {
    let navigate = useNavigate()
    const handleChange = (value) => {
        if (value !== null) {
            console.log(value['alt'])
            let url = '/' + value['alt']
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
            <Select options={buildings} isClearable={true} value={null} onChange={(inputValue) => { handleChange(inputValue)}} />
    );
}

export default Search