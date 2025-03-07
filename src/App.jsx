import React from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const Registration = ({ navigate }) => {
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const Login = ({ navigate }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Home = () => {
  return <h2>Home Page - Welcome!</h2>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<NavigateWrapper Component={Registration} />} />
        <Route path="/login" element={<NavigateWrapper Component={Login} />} />
      </Routes>
    </Router>
  );
};

// Wrapper Component to Pass `useNavigate`
const NavigateWrapper = ({ Component }) => {
  const navigate = useNavigate();
  return <Component navigate={navigate} />;
};

export default App;
