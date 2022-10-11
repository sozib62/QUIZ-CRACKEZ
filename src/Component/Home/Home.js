import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayData from '../DisplayData/DisplayData';
import './Home.css'

const Home = () => {
    const loadData = useLoaderData();
    const { data } = loadData;
    return (
        <div>
            {
                data.map(datas => <DisplayData
                    key={datas.id}
                    data={datas}
                ></DisplayData>)
            }
        </div>
    );
};

export default Home;