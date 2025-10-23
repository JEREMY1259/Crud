import React from "react";
import axios from "axios";
function Eliminar({ id }) {
    const eliminar = async () => {
    if (window.confirm("¿Seguro que deseas eliminar este usuario?")) {
    await axios.delete(`http://localhost:3001/usuarios/${id}`);
    window.location.reload(); // refresca la lista
    }
    };
return <button onClick={eliminar}>Eliminar</button>;
}
export default Eliminar;

