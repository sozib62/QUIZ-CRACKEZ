import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayData from '../DisplayData/DisplayData';
import QuizData from '../QuizData/QuizData';
import './Home.css'

const Home = () => {
    const loadData = useLoaderData();
    const { data } = loadData;
    // console.log(data);
    return (
        <div>
            <div className='head-title'>
                <h1>As You Do Practice <span className='title-part'>YOUR QUIZ</span></h1>
            </div>

            <div className='quiz-div'>
                {
                    data.map(datas => <DisplayData
                        key={datas.id}
                        data={datas}
                    ></DisplayData>)
                }


            </div>
        </div>
    );
};

export default Home;