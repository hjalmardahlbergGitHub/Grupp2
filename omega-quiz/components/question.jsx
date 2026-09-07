import { useState } from 'react'

function question(category, questionText, correctAnswer, incorrentAnswers) {
    
    var allAnswers = [...incorrentAnswers, correctAnswer];
    
    allAnswers.sort(() => Math.random() - 0.5);

    return (
    <>
        <h2>{category}</h2>
        <p>{questionText}</p>
        
        {allAnswers.map((answer, index) => (
            <button key={index}>{answer}</button>
        ))}

    </>
  )
}

export default App
