import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './pages/Welcome'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

function App() {

  return (
   <div>
      <Routes>
        <Route path="/" element={<Welcome/> }/>
        <Route path="/quiz" element={<Quiz/> }/>
        <Route path="/result" element={<Result/> }/>
      </Routes>

      <div className="cloud-band" aria-hidden="true">
        <div className="cloud cloud-left"></div>
        <div className="cloud cloud-right"></div>
      </div>

   </div>
  )
}

export default App
