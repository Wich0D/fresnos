import React from "react";
//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Login from "./pages/login/Login";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
//Components
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main route */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

