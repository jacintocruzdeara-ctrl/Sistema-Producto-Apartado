import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
export function Apartados() {

  const { apartados, eliminarApartado } = useContext(AppContext);
  const navigate = useNavigate();

  const formatoMXN = (precio) => {
    return Number(precio).toFixed(2); // con punto
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

  
     {/* HEADER */}
<h1
  className="flex items-center gap-3 text-4xl font-extrabold mb-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-sm">

  <ShoppingCartIcon
    className=" w-10 h-10 text-emerald-600 animate-bounce" />
  Productos Apartados

</h1>


     {/* BOTÓN ATRÁS */}
<button
  onClick={() => navigate(-1)}
  className=" mb-6 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-3 rounded-2xl font-bold shadow-lg transition-all  duration-300  hover:scale-105">
  <ArrowLeftIcon className="w-5 h-5" />
  Volver
</button>

      {/* VACÍO */}
      {apartados.length === 0 ? (
        <div className="border-2 border-dashed border-blue-300 bg-blue-50 text-blue-700 font-semibold p-8 text-center rounded-xl">
          No hay productos apartados
        </div>
      ) : (

        /* GRID */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {apartados.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
            >

              {/* IMAGEN */}
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-24 h-24 object-cover mx-auto mb-3 rounded"
              />

              {/* NOMBRE */}
              <h3 className="font-semibold text-gray-800">
                {p.nombre}
              </h3>

              {/* PRECIO (CON PUNTO) */}
              <p className="text-green-600 font-bold mb-3">
                ${formatoMXN(p.precio)}
              </p>

              {/* ELIMINAR */}
              <button
                onClick={() => eliminarApartado(p._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg w-full transition"
              >
                🗑 Eliminar
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}
