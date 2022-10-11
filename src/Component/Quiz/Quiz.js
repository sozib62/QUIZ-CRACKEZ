import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizs = useLoaderData();
    const { data } = quizs;
    const { questions } = data;
    console.log(questions);
    return (
        <div>

        </div>
    );
};

export default Quiz;