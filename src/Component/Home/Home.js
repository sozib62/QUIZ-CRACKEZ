import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayData from '../DisplayData/DisplayData';
import './Home.css'

const Home = () => {
    const loadData = useLoaderData();
    const { data } = loadData;
    // console.log(data);
    return (
        <div>
            <div className='head-title'>
                <h3> A website with interactive quizzes can be a dynamic project and a great way to grow your knowladge. By creating your
                    <br />
                    quiz website with WordPress, you have complete control over the features, design, and monetization of your quiz site.</h3>
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