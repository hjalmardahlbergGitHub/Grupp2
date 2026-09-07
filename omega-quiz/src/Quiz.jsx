import { useState, useEffect } from 'react'
import Question from '../components/question.jsx'
import './App.css'

function Quiz() {
  const [questions, setQuestions] = useState([])


  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    console.log(questions)
  }, [questions]);

  return (
    <>
    <h1>Quiz</h1>
    {questions.length > 0 && questions.map((question, index) => (
        <Question key={index} category={question.category} questionText={question.question} correctAnswer={question.correct_answer} incorrectAnswers={question.incorrect_answers}>
        </Question>
      ))
      }
      <button onClick={fetchQuestions}>Hämta nya frågor</button>
    </>
  )
}

export default Quiz
