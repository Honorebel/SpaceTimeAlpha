/** @format */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  useEffect(() => {
    document.title = "SpaceTime";
  }, []);

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
