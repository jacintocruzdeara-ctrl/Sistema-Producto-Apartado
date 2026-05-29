
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";



import {ArrowRightOnRectangleIcon,ShoppingCartIcon} from "@heroicons/react/24/solid";

import { AppContext } from "../context/AppContext";

export function Catalogo() {

  const { productos, apartarProducto, apartados } =
    useContext(AppContext);

  const navigate = useNavigate();

  // 🔥 CERRAR SESIÓN
  const cerrarSesion = () => {

    localStorage.removeItem("user");

    alert("Sesión cerrada ");

    navigate("/login");

  };

  // 💰 FORMATO PRECIO
  const formatoMXN = (precio) => {
    return "$" + Number(precio).toFixed(2);
  };

  return (

    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 border-b-4 border-blue-500 pb-3">

       <h1
  className="
    flex
    items-center
    gap-3
    text-4xl
    font-extrabold
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-purple-600
    bg-clip-text
    text-transparent
    drop-shadow-sm
  "
>

  <ShoppingBagIcon
    className="
      w-10
      h-10
      text-indigo-600
      animate-bounce
    "
  />

  Productos

</h1>

        {/* BOTONES */}
        <div className="flex items-center gap-4">

          {/* CARRITO */}
          <Link
            to="/apartados"
            className=" relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-2xl font-bold shadow-lg transition-all duration-300 hover:scale-105 " >

            <ShoppingCartIcon className="w-6 h-6" />

            Apartados

            {/* CONTADOR */}
            <span
              className=" absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold" >
              {apartados?.length || 0}
            </span>

          </Link>

          {/* BOTON CERRAR SESION */}
          <button
            onClick={cerrarSesion}
            className="  flex  items-center  gap-2  bg-red-500  hover:bg-red-600  text-white  px-5  py-3  rounded-2xl  font-bold  shadow-lg  transition-all  duration-300 hover:scale-105"  >
            {/*➡ una flecha saliendo de una puerta*/}
            <ArrowRightOnRectangleIcon className="w-6 h-6" />

            Cerrar sesión

          </button>

        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {productos?.map((p) => (

          <div
            key={p._id}
            className=" bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center
            "
          >

            <img
              src={p.imagen}
              alt={p.nombre}
              className="  w-28  h-28  object-cover  mx-auto  mb-3  rounded  " />

            <h3 className="font-semibold text-gray-800">
              {p.nombre}
            </h3>

            {/*  PRECIO */}
            <p className="text-gray-500 mb-3">
              {formatoMXN(p.precio)}
            </p>

            {/* BOTON APARTAR */}
            <button
              onClick={() => apartarProducto(p)}
              className=" bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full transition " >
              Apartar
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}