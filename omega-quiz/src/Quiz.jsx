import { useEffect, useState } from 'react'
import Question from '../components/question.jsx'
import './App.css'

function Quiz() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [points, setPoints] = useState(0)
  const [isGameFinished, setIsGameFinished] = useState(false)

  const fetchQuestions = async () => {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')

      if (!response.ok) {
        throw new Error('Could not fetch questions')
      }

      const data = await response.json()

      if (!data.results?.length) {
        throw new Error('No questions were returned')
      }

      setQuestions(data.results)
      setCurrentQuestionIndex(0)
    } catch (fetchError) {
      console.error('Error fetching questions:', fetchError)
      setError('Kunde inte hämta frågor.')
    } finally {
      setIsLoading(false)
    }
  }


  const checkCorrectAnswer = (answerText, correctAnswer) => {
    if (answerText !== correctAnswer) {
      setIsGameFinished(true)
      return
    }

    if (currentQuestionIndex === questions.length - 1) {
      fetchQuestions()
      return
    }
    setPoints(points + 1)

    setCurrentQuestionIndex((index) => index + 1)
  }

  const currentQuestion = questions[currentQuestionIndex]

  const restartGame = () => {
    window.location.reload()

  }

  return (
    <>
    {!isGameFinished &&
    (<div>
      <h1>Quiz</h1>
      <h3>You have {points} points</h3>
    </div>)}
      
    
       {!isLoading && error && !isGameFinished &&(
        <>
          <p>{error}</p>
          <button onClick={fetchQuestions}>Försök igen</button>
        </>
      )}

      {!isLoading && !error && currentQuestion && !isGameFinished && (
        <Question
          click={checkCorrectAnswer}
          category={currentQuestion.category}
          questionText={currentQuestion.question}
          correctAnswer={currentQuestion.correct_answer}
          incorrectAnswers={currentQuestion.incorrect_answers}
        />
      )}

      {isLoading && !isGameFinished && (
        <button onClick={fetchQuestions}>Starta quizet</button>
      )}

      {isGameFinished && (
        <div>
        <h2>Game Over</h2>
        <p>You got {points} points</p>
        <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </>
  )
}

export default Quiz
