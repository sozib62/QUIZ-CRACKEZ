import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayData.css'
const DisplayData = ({ data }) => {
    // console.log(data);
    const { id, name, logo } = data;

    return (
        <div className='data'>
            <div className='datas'>
                <img src={logo} alt="" />
                <h1>{name}</h1>
                <Link to={`quizData/${id}`}>Start Quiz</Link>
            </div>
        </div>
    );
};

export default DisplayData;