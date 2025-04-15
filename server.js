require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); 
app.use(express.json()); 

app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("ROTA TA FUNCIONANDO!!");
});

app.listen(PORT, () => {
    console.log(` 🎀 Servidor rodando em http://localhost:${PORT}`);
});