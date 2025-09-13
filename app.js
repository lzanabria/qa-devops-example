const express = require("express");
const app = express();
app.use(express.json());

const VERSION = "2.0.0";

app.post("/sumar", (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== "number" || typeof b !== "number") {
        return res.status(400).json({ error: "Parámetros inválidos, se esperan números" });
    }

    res.json({
        version: VERSION,
        resultado: a - b
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en ${PORT}`);
});

module.exports = app;
