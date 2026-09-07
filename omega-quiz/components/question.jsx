import { useState } from 'react'

function question({click, category, questionText, correctAnswer, incorrectAnswers}) {

    
    const decodeHTMLEntities = (str) => {
    var element = document.createElement('div')
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }
    return str
}

    var allAnswers = [...incorrectAnswers, correctAnswer];

    for (let index = 0; index < allAnswers.length; index++) {
        allAnswers[index] = decodeHTMLEntities(allAnswers[index]);
        
    }

    const right_answer = correctAnswer;


    allAnswers.sort(() => Math.random() - 0.5);

    return (
    <>
        <h2>{decodeHTMLEntities(category)}</h2>
        <p>{decodeHTMLEntities(questionText)}</p>
        <ul>
            {allAnswers.map((answer,index) => (<button key={index} onClick={() => click(answer, right_answer)}>{answer}</button>))}
        </ul>

    </>
  )
}

export default question
