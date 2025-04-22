require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");
const path = require("path");
const app = express();

const setupSwaggerUI = require("./src/config/swagger");
setupSwaggerUI(app);


app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/docs", express.static("docs"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(` 🎀 Servidor rodando em http://localhost:${PORT}`);
});