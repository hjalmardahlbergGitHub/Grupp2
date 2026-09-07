import { useEffect, useState } from 'react'
import Question from '../components/question.jsx'
import './App.css'

function Quiz() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

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
      return
    }

    if (currentQuestionIndex === questions.length - 1) {
      fetchQuestions()
      return
    }

    setCurrentQuestionIndex((index) => index + 1)
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <>
      <h1>Quiz</h1>

      {isLoading && <p>Hämtar frågor...</p>}

      {!isLoading && error && (
        <>
          <p>{error}</p>
          <button onClick={fetchQuestions}>Försök igen</button>
        </>
      )}

      {!isLoading && !error && currentQuestion && (
        <Question
          click={checkCorrectAnswer}
          category={currentQuestion.category}
          questionText={currentQuestion.question}
          correctAnswer={currentQuestion.correct_answer}
          incorrectAnswers={currentQuestion.incorrect_answers}
        />
      )}

      {isLoading && (
        <button onClick={fetchQuestions}>Hämta nya frågor</button>
      )}
    </>
  )
}

export default Quiz
