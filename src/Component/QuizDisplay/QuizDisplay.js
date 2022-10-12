import React from 'react';
import './QuizDisplay.css'




const QuizDisplay = ({ quizAns, correctAnswer }) => {

    return (
        <div className='div'>
            <button> <input type="radio" name="" id="" /> {quizAns}</button>
        </div >
    );
};

export default QuizDisplay;