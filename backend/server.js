import express from "express";
import cors from "cors";
import { db } from "./db.js";
const app = express();

app.use(cors());
app.use(express.json());

// GET - Listar usuarios

app.get("/usuarios", (req, res) => {
    db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
    });

});

// POST - Crear usuario

app.post("/usuarios", (req, res) => {
    const { nombre, email } = req.body;
    const sql = "INSERT INTO usuarios (nombre, email) VALUES (?, ?)";
    db.query(sql, [nombre, email], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, nombre, email });
    });

});

// PUT - Editar usuario

app.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    const sql = "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?";
    db.query(sql, [nombre, email, id], err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuario actualizado" });
    });

});

// DELETE - Eliminar usuario

app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM usuarios WHERE id = ?";
    db.query(sql, [id], err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuario eliminado" });
    });

});
app.listen(3001, () => console.log("🚀 Servidor backend en puerto 3001"));