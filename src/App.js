import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Crear from "./components/Crear";
import Listar from "./components/Listar";
import Editar from "./components/Editar";

function App() {
  const [actualizar, setActualizar] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const refrescar = () => {
  setActualizar(!actualizar);
  setUsuarioEditando(null);
  };
return (
  <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>CRUD con React + Node.js + MySQL</h1>
    <Crear onCreado={refrescar} />
    <Editar usuario={usuarioEditando} onActualizado={refrescar} />
    <Listar
      recargar={actualizar}
      onEditar={setUsuarioEditando}
    />
    </header>
  </div>
  );

}
export default App;