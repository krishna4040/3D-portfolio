import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={"Home"} />
            <Route path="/about" element={"About"} />
            <Route path="/projects" element={"projects"} />
            <Route path="/contact" element={"contact"} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
