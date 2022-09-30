/** @format */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SelectSkills from './pages/getStarted/SelectSkills';
import SelectInterests from "./pages/getStarted/SelectInterests";
import SelectUsertype from './pages/getStarted/SelectUsertype';

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
            <Route path="/selectinterests" element={<SelectInterests />} />
            <Route path="/selectskills" element={<SelectSkills />} />
            <Route path="/selectusertype" element={<SelectUsertype />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
