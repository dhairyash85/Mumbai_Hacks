import Landing from "./Pages/Landing";
import "./App.css";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import KYC from "./Pages/KYC";
import Dashboar from "./Pages/Dashboar";
import Forms from "./Pages/Forms";
import Upload from "./Pages/Upload";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/dashboard" element={<Dashboar />} />
           <Route path='/form' element={<Forms/>}/>
           <Route path='/upload' element={<Upload/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
