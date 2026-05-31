import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [apartados, setApartados] = useState([]);

  // 🔐 Usuario
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // 🌐 URL BASE DE LA API
  const BASE_URL = "https://api-proyecto-dany2.onrender.com";

  const API_PRODUCTOS = `${BASE_URL}/api/producto`;
  const API_APARTADOS = `${BASE_URL}/api/apartado`;
  const API_LOGIN = `${BASE_URL}/api/login`;

  // =====================================================
  // 🔐 LOGIN
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error("Credenciales incorrectas");
    }

    const data = await res.json();

    login(data);

    return data;
  };

  // =====================================================
  // 📦 PRODUCTOS
  // =====================================================

  const obtenerProductos = async () => {
    try {
      const res = await fetch(API_PRODUCTOS);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error obteniendo productos:", error);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      await fetch(API_PRODUCTOS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      await obtenerProductos();
    } catch (error) {
      console.error("Error agregando producto:", error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await fetch(`${API_PRODUCTOS}/${id}`, {
        method: "DELETE",
      });

      await obtenerProductos();
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  const actualizarProducto = async (id, datos) => {
    try {
      await fetch(`${API_PRODUCTOS}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: datos.nombre,
          precio: Number(datos.precio),
          imagen: datos.imagen,
        }),
      });

      await obtenerProductos();
    } catch (error) {
      console.error("Error actualizando producto:", error);
    }
  };

  // =====================================================
  // 🛒 APARTADOS
  // =====================================================

  const obtenerApartados = async () => {
    try {
      const res = await fetch(API_APARTADOS);
      const data = await res.json();
      setApartados(data);
    } catch (error) {
      console.error("Error obteniendo apartados:", error);
    }
  };

  const apartarProducto = async (producto) => {
    try {
      const nuevo = {
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
      };

      const res = await fetch(API_APARTADOS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevo),
      });

      const data = await res.json();

      setApartados((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error apartando producto:", error);
    }
  };

  const eliminarApartado = async (id) => {
    try {
      await fetch(`${API_APARTADOS}/${id}`, {
        method: "DELETE",
      });

      setApartados((prev) =>
        prev.filter((item) => item._id !== id)
      );

      alert("Apartado eliminado ✔");
    } catch (error) {
      console.error(error);
      alert("Error al eliminar apartado");
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
    <AppContext.Provider
      value={{
        // Productos
        productos,
        obtenerProductos,
        agregarProducto,
        eliminarProducto,
        actualizarProducto,

        // Apartados
        apartados,
        obtenerApartados,
        apartarProducto,
        eliminarApartado,

        // Usuario
        user,
        login,
        logout,
        iniciarSesion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}