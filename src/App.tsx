import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ranking' element={<h1>RANKING</h1>} />
          <Route path='/game' element={<h1>GAME</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
