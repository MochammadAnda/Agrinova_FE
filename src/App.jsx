import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
