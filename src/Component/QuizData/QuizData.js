import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from '../DisplayQuiz/DisplayQuiz';

const QuizData = () => {

    const quizLoaderData = useLoaderData();
    const quiz = quizLoaderData.data.questions;
    console.log(quiz);

    return (

        <div>
            {
                quiz.map(question => <DisplayQuiz
                    key={question.id}
                    que={question}
                ></DisplayQuiz>)
            }

        </div>
    );
};

export default QuizData;