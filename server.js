require("dotenv").config();

const express = require("express");
const cors = require("cors");
const usersRoutes = require("./src/routes/usersRoutes");
const postRoutes = require("./src/routes/postRoutes");
const path = require("path");
const app = express();

const setupSwaggerUI = require("./src/config/swagger");
setupSwaggerUI(app);


app.use(cors());
app.use(express.json());
app.use("/api", usersRoutes);
app.use("/api", postRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/docs", express.static("docs"));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(` 🎀 Servidor rodando em http://localhost:${PORT}`);
});