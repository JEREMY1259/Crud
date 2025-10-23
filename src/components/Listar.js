import React, { useEffect, useState } from "react";
import axios from "axios";
import eliminar from "./Eliminar";
import Eliminar from "./Eliminar";

function Listar({ recargar, onEditar }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const res = await axios.get("http://localhost:3001/usuarios");
        setUsuarios(res.data);
      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
      }
    };

    cargarUsuarios();
  }, [recargar]);

  return (
    <div>
      <h2>Lista de Usuarios</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nombre}</td>
                <td>{u.email}</td>
                <td>
                  <button onClick={() => onEditar(u)}>Editar</button>
                  <Eliminar id={u.id} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay usuarios registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Listar;
