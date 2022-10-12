import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from '../DisplayQuiz/DisplayQuiz';
import './QuizData.css'

const QuizData = () => {

    const quizLoaderData = useLoaderData();
    const quiz = quizLoaderData.data.questions;
    const quizName = quizLoaderData.data.name;
    // console.log(quizName);

    return (

        <div>
            <h1 className='quizes-title'>Quiz Of {quizName} !!</h1>
            <div>
                {
                    quiz.map(question => <DisplayQuiz
                        key={question.id}
                        que={question}
                    ></DisplayQuiz>)
                }
            </div>

        </div>
    );
};

export default QuizData;