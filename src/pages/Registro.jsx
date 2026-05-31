import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
export function Registro() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    password: ""
  });

  {/*Se ejecuta al enviar el formulario. */}
  const handleSubmit = async (e) => {
    
{/*Evita que la página se recargue. */}
    e.preventDefault();

    try {

   const res = await fetch("https://api-proyecto-dany2.onrender.com/api/registro",  {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      alert(data.msg);

      if (res.ok) {
        navigate("/login");
      }

    } catch (error) {

      alert("Error del servidor");

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-200 p-6">
{/*Se ejecuta al enviar el formulario.*/}
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8"
      >

        <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
          Crear Cuenta
        </h1>

        {/* NOMBRE */}
        <input
          type="text"
          placeholder="Nombre"
          required
          onChange={(e) =>
            setForm({ ...form, nombre: e.target.value })
          }
          className="w-full p-5 mb-6 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
        />

        {/* CORREO */}
        <input
          type="email"
          placeholder="Correo"
          required
          onChange={(e) =>
            setForm({ ...form, correo: e.target.value })
          }
          className="w-full p-5 mb-6 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Contraseña"
          required
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full p-5 mb-8 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
        />

        {/* BOTON */}
        {/* <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-2xl text-2xl transition duration-300 shadow-lg"
        >
          Registrar
        </button> */}

<button
  type="submit"
  className=" w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-500 hover:from-emerald-500 hover:via-green-600 hover:to-lime-600 text-white font-bold py-5 rounded-2xl text-2xl transition-all duration-500 shadow-2xl hover:scale-105 hover:shadow-green-400/50 active:scale-95">

  <UserPlusIcon className="w-8 h-8 animate-bounce" />

  Registrar

</button>



        {/* LOGIN */}
        <p className="text-center mt-6 text-gray-600">
          ¿Ya tienes cuenta?
        </p>

        <Link
          to="/login"
          className="block text-center mt-2 text-blue-600 font-bold hover:underline"
        >
          Iniciar sesión
        </Link>

      </form>

    </div>
  );
}