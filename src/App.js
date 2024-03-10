
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
// import Login from '../src/pages/Login';
import Register from '../src/pages/SignUp';

function App() {
  return (
      <Router>
        <Routes>
         <Route path="*" element={<Home/>}></Route>
         {/* <Route path="/login" element={<Login />}></Route> */}
         <Route path="/register" element={<Register />}></Route>
         </Routes>
      </Router>
  )
}

export default App;
