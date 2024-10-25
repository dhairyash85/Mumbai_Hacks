import { useState } from "react";
import Landing from "./Pages/Landing";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KYC from "./Pages/KYC";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/kyc" element={<KYC />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
