import {Routes, Route} from "react-router"
import Home from "./pages/Home"
import DiagnosticoCapilar from "./pages/DiagnosticoCapilar"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DiagnosticoCapilar" element={<DiagnosticoCapilar />} />
    </Routes>
  )
}

export default App
