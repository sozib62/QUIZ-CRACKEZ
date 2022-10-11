import React from 'react';
import './DisplayData.css'
const DisplayData = ({ data }) => {
    const { name, logo } = data;

    return (
        <div className='data'>
            <div className='datas'>
                <img src={logo} alt="" />
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default DisplayData;