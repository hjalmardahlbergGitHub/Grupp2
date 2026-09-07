import { useMemo } from 'react'

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

    const allAnswers = useMemo(() => {
        const answers = [...incorrectAnswers, correctAnswer].map(decodeHTMLEntities)

        for (let index = answers.length - 1; index > 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1))
            ;[answers[index], answers[randomIndex]] = [answers[randomIndex], answers[index]]
        }

        return answers
    }, [incorrectAnswers, correctAnswer])

    const right_answer = decodeHTMLEntities(correctAnswer)

    return (
    <>
        <h2>{decodeHTMLEntities(category)}</h2>
        <p>{decodeHTMLEntities(questionText)}</p>
        <ul className='answer-div'>
            {allAnswers.map((answer,index) => (<button className='answer-btn' key={index} onClick={() => click(answer, right_answer)}>{answer}</button>))}
        </ul>

    </>
  )
}

export default question
