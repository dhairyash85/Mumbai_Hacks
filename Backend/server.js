// server.js
const express = require("express");
const app = express();
app.use(express.json());

const attachContract = require("./middlewares/contractMiddleware"); // Import the middleware

// Apply middleware
app.use(attachContract);

const kycRoutes = require("./routes/kycRoutes");
const formRoutes = require("./routes/formRoutes");

app.use("/api/kyc", kycRoutes);
app.use("/api/forms", formRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
