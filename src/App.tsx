import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.scss'

import {P} from './components/core/P'

import { Landing } from './pages/Landing'
import { Gallery } from './pages/Gallery'
import { Resume } from './pages/Resume'
import { Story } from './pages/Story'

function PageRouting () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/playground" element={<Gallery />} />
        <Route path="/developer" element={<Resume />} />
        <Route path="/photographer" element={<Resume />} />
        <Route path="/designer" element={<Resume />} />
        <Route path="/story" element={<Story />} />
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
