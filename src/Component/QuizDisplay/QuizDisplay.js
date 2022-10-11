import React from 'react';
import './QuizDisplay.css'
const QuizDisplay = ({ quizAns, correctAnswer }) => {



    return (
        <div className='div'>
            <p> <input type="radio" name="" id="" /> {quizAns}</p>
        </div >
    );
};

export default QuizDisplay;