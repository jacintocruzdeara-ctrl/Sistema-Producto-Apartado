

import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [productos, setProductos] = useState([]);
  const [apartados, setApartados] = useState([]);

  // 🔐 LOGIN USER
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // 🔥 APIs
  const API = "http://localhost:4000/api/producto";
  const API_APARTADO = "http://localhost:4000/api/apartado";
  const API_LOGIN = "http://localhost:4000/api/login";

  // =====================================================
  // 🔵 LOGIN
  // =====================================================

  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const iniciarSesion = async (form) => {
    const res = await fetch(API_LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!res.ok) {
      throw new Error("Credenciales incorrectas");
    }

    const data = await res.json();
    login(data);
    return data;
  };

  // =====================================================
  // 🔵 PRODUCTOS
  // =====================================================

  const obtenerProductos = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProductos(data);
  };

  const agregarProducto = async (prod) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prod)
    });

    obtenerProductos();
  };

  const eliminarProducto = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    obtenerProductos();
  };

  const actualizarProducto = async (id, datos) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: datos.nombre,
        precio: Number(datos.precio),
        imagen: datos.imagen
      })
    });

    await obtenerProductos();
  };

  // =====================================================
  // 🛒 APARTADOS
  // =====================================================

  const obtenerApartados = async () => {
    const res = await fetch(API_APARTADO);
    const data = await res.json();
    setApartados(data);
  };

  const apartarProducto = async (p) => {
    const nuevo = {
      nombre: p.nombre,
      precio: p.precio,
      imagen: p.imagen
    };

    const res = await fetch(API_APARTADO, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo)
    });

    const data = await res.json();

    setApartados((prev) => [...prev, data]);
  };

 




  const eliminarApartado = async (id) => {

  try {

    // 🔥 ELIMINAR EN MONGODB
    await fetch(`http://localhost:4000/api/apartado/${id}`, {
      method: "DELETE"
    });

    // 🔥 ACTUALIZAR ESTADO
    setApartados(
      apartados.filter((item) => item._id !== id)
    );

    alert("Apartado eliminado ✔");

  } catch (error) {

    console.log(error);

    alert("Error al eliminar");

  }

};

  // =====================================================
  // 🚀 CARGA INICIAL
  // =====================================================

  useEffect(() => {
    const cargarDatos = async () => {
      await obtenerProductos();
      await obtenerApartados();
    };

    cargarDatos();
  }, []);

  return (
    <AppContext.Provider value={{

      // 🔵 productos
      productos,
      agregarProducto,
      eliminarProducto,
      actualizarProducto,

      // 🛒 apartados
      apartados,
      apartarProducto,
      eliminarApartado,

      // 🔐 login
      user,
      login,
      logout,
      iniciarSesion

    }}>
      {children}
    </AppContext.Provider>
  );
}