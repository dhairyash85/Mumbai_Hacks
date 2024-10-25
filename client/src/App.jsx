import { useState } from "react";
import Landing from "./Pages/Landing";
import "./App.css";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import KYC from "./Pages/KYC";
import Forms from "./Pages/Forms";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/form" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
