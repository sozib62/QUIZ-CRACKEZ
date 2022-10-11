import React from 'react';
import QuizDisplay from '../QuizDisplay/QuizDisplay';
import './DisplayQuiz.css'

const DisplayQuiz = ({ que }) => {
    const { options, question } = que;
    // console.log(question);
    return (
        <div className='divs'>
            <h2>{question}</h2>
            <div className='div'>
                {
                    options.map((quizAns, idx) => <QuizDisplay
                        key={idx}
                        quizAns={quizAns}
                        question={question}
                    ></QuizDisplay>)
                }
            </div>

        </div>
    );
};

export default DisplayQuiz;