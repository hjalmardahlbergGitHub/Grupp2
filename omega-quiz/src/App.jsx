import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <h1>Omega Quiz</h1>
      <p>Welcome to the Omega Quiz!</p>
      <button><Link to="/quiz">Starta Quizet</Link></button>
    </>
  )
}

export default App
