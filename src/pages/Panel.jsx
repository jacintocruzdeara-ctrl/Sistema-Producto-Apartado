import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export function Panel() {

  const {
    productos,
    agregarProducto,
    eliminarProducto,
    actualizarProducto
  } = useContext(AppContext);

  const [nuevo, setNuevo] = useState({
    nombre: "",
    precio: "",
    imagen: ""
  });

  const [editando, setEditando] = useState(null);

  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  // 🔒 SOLO ADMIN
  if (usuario?.rol !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-red-600 text-center">
            Acceso Denegado
          </h1>

          <p className="text-center text-gray-600 mt-4">
            No tienes permisos para acceder a este panel.
          </p>
        </div>
      </div>
    );
  }

  const guardar = async () => {

    if (!nuevo.nombre || !nuevo.precio) return;

    const datos = {
      nombre: nuevo.nombre,
      precio: Number(nuevo.precio),
      imagen: nuevo.imagen
    };

    if (editando) {
      await actualizarProducto(editando, datos);
      setEditando(null);
    } else {
      await agregarProducto(datos);
    }

    setNuevo({
      nombre: "",
      precio: "",
      imagen: ""
    });
  };

  const editar = (p) => {

    setNuevo({
      nombre: p.nombre,
      precio: p.precio,
      imagen: p.imagen
    });

    setEditando(p._id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2 w-fit">
        Panel de Control
      </h2>

      {/* FORM */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-wrap gap-3">

        <input
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              nombre: e.target.value
            })
          }
          className="border p-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          placeholder="Precio (MXN)"
          type="number"
          value={nuevo.precio}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              precio: e.target.value
            })
          }
          className="border p-2 rounded w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          placeholder="URL imagen"
          value={nuevo.imagen}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              imagen: e.target.value
            })
          }
          className="border p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={guardar}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {editando ? "Actualizar" : "Agregar"}
        </button>

      </div>

      {/* LISTA */}
      <div className="grid gap-4">

        {productos?.map((p) => (
          <div
            key={p._id}
            className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
          >

            <div className="flex items-center gap-4">

              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-14 h-14 rounded object-cover"
              />

              <div>
                <p className="font-semibold text-gray-800">
                  {p.nombre}
                </p>

                <p className="text-gray-500">
                  ${p.precio}
                </p>
              </div>

            </div>

            <div className="flex gap-2">

              <button
                onClick={() => editar(p)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded"
              >
                Editar
              </button>

              <button
                onClick={() => eliminarProducto(p._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Eliminar
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
