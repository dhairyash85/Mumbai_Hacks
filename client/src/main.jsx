import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WalletContractProvider } from "./Context/WalletProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <WalletContractProvider>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
    />
  </WalletContractProvider>
);
