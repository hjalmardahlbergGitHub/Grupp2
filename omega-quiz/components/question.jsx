import { useState } from 'react'

function question({category, questionText, correctAnswer, incorrectAnswers}) {
    var allAnswers = [...incorrectAnswers, correctAnswer];
    const right_answer = correctAnswer;
    allAnswers.sort(() => Math.random() - 0.5);




    return (
    <>
        <h2>{category}</h2>
        <p>{questionText}</p>
        <ul>
            {allAnswers.map((answer,index) => (<button key={index} onClick={() => console.log(answer === right_answer ? 'Correct!' : 'Incorrect!')}>{answer}</button>))}
        </ul>

    </>
  )
}

export default question
