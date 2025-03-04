import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.scss'

import { P } from './components/core/P'

import { Landing } from './pages/Landing'
import { Resume } from './pages/Resume'
import { Story } from './pages/Story'

function PageRouting () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/story" element={<Story />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  const BackButton = 
    window.location.pathname !== '/'? 
    (
      <button>Back</button>
    ): (<></>)

  return (
    <div id="app--container">
      <header>
        { BackButton } 
      </header>
      <main>
        <div className="grid centered gap-15px">
          <PageRouting />
        </div>
      </main>
      <footer>
        <P>2025 &#x2022; Made with Care ❤️</P>
      </footer>
    </div>
  )
}

export default App
