import { useMemo } from 'react'

function question({click, category, questionText, correctAnswer, incorrectAnswers}) {
    const right_answer = correctAnswer;
    const allAnswers = useMemo(() => {
        const answers = [...incorrectAnswers, correctAnswer];
        answers.sort(() => Math.random() - 0.5);
        return answers;
    }, [questionText, correctAnswer]);

    return (
    <>
        <h2>{category}</h2>
        <p>{questionText}</p>
        <ul>
            {allAnswers.map((answer,index) => (<button key={index} onClick={() => click(answer, right_answer)}>{answer}</button>))}
        </ul>

    </>
  )
}

export default question
