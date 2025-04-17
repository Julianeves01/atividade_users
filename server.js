require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const setupSwagger = require("./src/config/swagger");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
setupSwagger(app);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` 🎀 Servidor rodando em http://localhost:${PORT}`);
});