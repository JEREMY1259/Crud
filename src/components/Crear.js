import React, { useState } from "react";
import axios from "axios";

function Crear({ onCreado }) {
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const crear = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/usuarios", { nombre, email });
    setNombre("");
    setEmail("");
    onCreado();
    };



return (
    <form onSubmit={crear}>
        <h2>Crear Usuario</h2>
        <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
        />
        <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
    <button type="submit">Guardar</button>
    </form>
    );
}
export default Crear;
