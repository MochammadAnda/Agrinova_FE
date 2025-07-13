import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <div>
        {/* <nav className="bg-white shadow-lg p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link>
            </li>
          </ul>
        </nav> */}
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
