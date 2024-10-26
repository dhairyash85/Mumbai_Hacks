// server.js
const cors=require('cors')
const express = require("express");
const app = express();
const connectDB=require('./db')
const corsOptions = {
    origin: ["http://localhost:5173"],
    methods: '*'
  };
app.use(express.json());
app.use(cors(corsOptions));
connectDB()
const attachContract = require("./middlewares/contractMiddleware"); // Import the middleware

// Apply middleware
app.use(attachContract);

const kycRoutes = require("./routes/kycRoutes");
const formRoutes = require("./routes/formRoutes");

app.use("/api/kyc", kycRoutes);
app.use("/api/form", formRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
