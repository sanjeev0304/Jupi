import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import RiskPrediction from "./Components/RiskPrediction";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/risk" element={<RiskPrediction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
