import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Informacoes from "./pages/Informacoes"
import Recursos from "./pages/Recursos"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informacoes" element={<Informacoes />} />
            <Route path="/recursos" element={<Recursos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}