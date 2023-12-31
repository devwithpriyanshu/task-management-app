import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { BrowserRouter , Routes , Route } from "react-router-dom";
/**
 * The App function returns a set of routes for different paths, including a signup page, login page,
 * dashboard page, and a 404 page.
 */

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
