
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function Menu() {

  const navigate = useNavigate();
  const { apartados } = useContext(AppContext);

  return (
    <nav style={{
      background: "#2fb104",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      {/* Menú */}
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => navigate("/")}>Inicio</button>
        <button onClick={() => navigate("/productos")}>Productos</button>
        <button onClick={() => navigate("/servicios")}>Servicios</button>
        <button onClick={() => navigate("/contacto")}>Contacto</button>
        <NavLink to="/panel">🛠 Panel</NavLink>
      </div>

      {/* Carrito */}
      <div
        onClick={() => navigate("/apartados")}
        style={{
          cursor: "pointer",
          background: "#7e8daf",
          color: "white",
          padding: "8px 15px",
          borderRadius: "20px"
        }}
      >
        🛒 ({apartados.length})
      </div>

    </nav>
  );
}

export default Menu;