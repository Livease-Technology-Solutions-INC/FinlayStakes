import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import PrivateRoutes from "./utlis/PrivateRoutes";
import { AuthProvider } from './context/AuthContext';
import Home from "./pages/Home";
import Login from '../src/pages/Login';
import Register from '../src/pages/SignUp';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes />} >
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
