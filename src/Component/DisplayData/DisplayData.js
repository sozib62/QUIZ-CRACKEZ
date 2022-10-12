import React from 'react';
import { Link } from 'react-router-dom';
import DisplayQuiz from '../DisplayQuiz/DisplayQuiz';
import './DisplayData.css'
const DisplayData = ({ data }) => {
    // console.log(data);
    const { id, name, logo, total } = data;

    return (
        <div className='data'>
            <div className='datas'>
                <img src={logo} alt="" />
                <h1>{name}</h1>
                <button className='link-btn'> <Link to={`quizData/${id}`}>Start Quiz</Link>: {total}</button>
            </div>

        </div>
    );
};

export default DisplayData;