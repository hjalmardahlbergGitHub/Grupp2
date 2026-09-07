import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <h1>Omega Quiz</h1>
      <p>Welcome to the Omega Quiz!</p><br></br>
      <div className="rules-box">
        <h2>Rules</h2>
        <ul>
          <li>Each correct answer gives you points.</li>
          <li>You cannot go back to a previous question.</li>
          <li>The game will reset if a question is answered incorrectly.</li>
          <li>Your final score is shown at the end of the quiz.</li>
          <li>You only have 5 minutes to get a top score!</li>
        </ul>
        
      </div>
      <br></br>
      <p>Have Fun!</p>
      <p></p>

      <button><Link to="/quiz">Starta Quizet</Link></button>
    </>
  )
}

export default App
