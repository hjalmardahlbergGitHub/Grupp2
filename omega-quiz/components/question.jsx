import { useState } from 'react'

function question({click, category, questionText, correctAnswer, incorrectAnswers}) {
    var allAnswers = [...incorrectAnswers, correctAnswer];
    const right_answer = correctAnswer;
    allAnswers.sort(() => Math.random() - 0.5);


    return (
    <>
        <h2>{category}</h2>
        <p>{questionText}</p>
        <ul>
            {allAnswers.map((answer,index) => (<button key={index} onClick={() => click(answer, right_answer)}>{answer}</button>))}
            <p>{correctAnswer}</p>
        </ul>

    </>
  )
}

export default question
