import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Message from './components/message'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/message' element={<Message />} /> */}
      </Routes>
    </Router>
  )
}

export default App
