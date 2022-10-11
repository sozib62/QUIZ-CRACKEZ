import React, { useState } from 'react';
import QuizDisplay from '../QuizDisplay/QuizDisplay';
import './DisplayQuiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayQuiz = ({ que }) => {
    const { options, question, correctAnswer } = que;

    const taostify = () => toast(<p>{correctAnswer}</p>);



    return (
        <div className='divs'>
            <div className='que-icon'>
                <h2 > {question}</h2>
                <button className='icon' onClick={taostify}> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            </div>
            <div className='div'>
                {
                    options.map((quizAns, idx) => <QuizDisplay
                        key={idx}
                        quizAns={quizAns}
                        correctAnswer={correctAnswer}
                    ></QuizDisplay>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default DisplayQuiz;