import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './ChartDisplay.css'

const ChartDisplay = () => {

    const data = [
        {
            name: 'React',
            total: 8,
        },
        {
            name: 'JavaScript',
            total: 9,
        },
        {
            name: 'CSS',
            total: 8,
        },
        {
            name: 'Git',
            total: 11,
        }
    ]

    return (
        <div className='chart'>
            <LineChart height={500} width={500} data={data}>
                <Line type="monotone" dataKey='total' stroke="#8884d8" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div >
    );
};

export default ChartDisplay;