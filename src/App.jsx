import {Routes, Route} from "react-router"
import Home from "./pages/Home"
import DiagnosticoCapilar from "./pages/DiagnosticoCapilar"
import HebraCapilar from "./pages/HebraCapilar"
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DiagnosticoCapilar" element={<DiagnosticoCapilar />} />
      <Route path="/HebraCapilar" element={<HebraCapilar />} />
    </Routes>
  )
}

export default App
