// import React from 'react'
// import { Routes, Route } from "react-router-dom";




// import { Inicio } from "../pages/Inicio";
// import { Catalogo } from "../pages/Catalogo";
// import { Apartados } from "../pages/Apartados";
// import { Servicios } from "../pages/Servicios";
// import { Contacto } from "../pages/Contacto";
// import { Login } from "../pages/Login";
// import { Panel } from "../pages/Panel";
// import { Registro } from "../pages/Registro";

// export function Rutas() {
//   return (
//     <Routes>
//       <Route path="/" element={<Inicio />} />
//       <Route path="/productos" element={<Catalogo />} />
//       <Route path="/apartados" element={<Apartados />} />
//       <Route path="/servicios" element={<Servicios />} />
//       <Route path="/contacto" element={<Contacto />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/panel" element={<Panel />} />
//       <Route path="/registro" element={<Registro />} />
//     </Routes>
//   );
// }









import React from "react";
import { Routes, Route } from "react-router-dom";

import { Inicio } from "../pages/Inicio";
import { Catalogo } from "../pages/Catalogo";
import { Apartados } from "../pages/Apartados";
import { Servicios } from "../pages/Servicios";
import { Contacto } from "../pages/Contacto";
import { Login } from "../pages/Login";
import { Panel } from "../pages/Panel";
import { Registro } from "../pages/Registro";

import { PrivateRoute } from "../components/PrivateRoute";

export function Rutas() {

  return (

    <Routes>

      {/* PUBLICAS */}
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />



      {/* PRIVADAS */}
      <Route
        path="/productos"
        element={
          <PrivateRoute>
            <Catalogo />
          </PrivateRoute>
        }
      />

      <Route
        path="/apartados"
        element={
          <PrivateRoute>
            <Apartados />
          </PrivateRoute>
        }
      />

      <Route
        path="/panel"
        element={
          <PrivateRoute>
            <Panel />
          </PrivateRoute>
        }
      />

    </Routes>

  );
}
