import { useState } from "react";
import Landing from "./Pages/Landing";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KYC from "./Pages/KYC";
import Dashboar from "./Pages/Dashboar";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/dashboard" element={<Dashboar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
