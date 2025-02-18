require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Eu amo BackEnd");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});