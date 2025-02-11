import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Form from "./components/registerpage/form";
import Task from "./components/taskcreation/Task";
import Header from "./pages/Header";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Task /> : <Navigate to="/sign_in" replace />
          }/>
        <Route path="/sign_in" element={<Form handleLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
