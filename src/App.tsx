import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.scss'

import {P} from './components/core/P'
import {Background} from './components/core/Background'

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
        <Route path="/resume" element={<Resume />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {

  return (
    <Background cube_size={40}>
      <header></header>
      <main>
        <div className="grid centered gap-15px">
          <PageRouting />
        </div>
      </main>
      <footer>
        <P>2025 * Made with Care</P>
      </footer>
    </Background>
  )
}

export default App
