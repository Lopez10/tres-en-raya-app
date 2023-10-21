import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<h1>HOME</h1>} />
          <Route path='/ranking' element={<h1>RANKING</h1>} />
          <Route path='/game' element={<h1>GAME</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
