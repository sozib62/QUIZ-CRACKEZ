import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChartDisplay from '../ChartDisplay/ChartDisplay';

const Statistics = () => {
    const chartData = useLoaderData()
    const { data: charts } = chartData;
    // console.log(charts);

    return (
        <div>
            <ChartDisplay></ChartDisplay>
        </div>
    );
};

export default Statistics;