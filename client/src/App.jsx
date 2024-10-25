import { useState } from "react";
import Landing from "./Pages/Landing";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KYC from "./Pages/KYC";
import { Hero } from "./Components/Hero";
import Forms from "./Pages/Form";

function App() {
  return (
    <div className="px-[170px] bg-black min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/kyc' element={<KYC />} />
          <Route path='/form' element={<Forms />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
