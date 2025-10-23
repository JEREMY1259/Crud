import React, { useState, useEffect } from "react";
import axios from "axios";

function Editar({ usuario, onActualizado }) {
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");

    useEffect(() => {
if (usuario) {
    setNombre(usuario.nombre);
    setEmail(usuario.email);
    }
    }, [usuario]);

const actualizar = async (e) => {
    e.preventDefault();
    if (!usuario) return;
    await axios.put(`http://localhost:3001/usuarios/${usuario.id}`, {
    nombre,
    email,
    });
    onActualizado();
    };

if (!usuario) return null;
return (
    <form onSubmit={actualizar}>
    <h2>Editar Usuario</h2>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <input type="email"placeholder="Correo"value={email}onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Actualizar</button>
    </form>
    );
}
export default Editar;