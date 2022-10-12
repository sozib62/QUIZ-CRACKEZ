import React from 'react';
import './QuizDisplay.css'
import Swal from 'sweetalert2'



const QuizDisplay = ({ quizAns, correctAnswer }) => {


    const handleAlert = () => {
        if (quizAns === correctAnswer) {
            Swal.fire("Good job!", "This is Correct Ans!", "success")
        }
        else {
            Swal.fire("Oops", "This is Incorrect Ans!", "error")
        }
    }
    return (
        <div className='div'>
            <button className='btn' onClick={handleAlert} > <input type="radio" name="" id="" /> {quizAns}</button>
        </div >
    );
};

export default QuizDisplay;