import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, About, Contact, Projects } from "./pages"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
