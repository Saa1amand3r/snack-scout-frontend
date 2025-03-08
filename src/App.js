import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import LocationTracker from "./pages/Test";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/test" element={<LocationTracker/>}/>
        </Routes>
      </Router>
  );
}

export default App;
