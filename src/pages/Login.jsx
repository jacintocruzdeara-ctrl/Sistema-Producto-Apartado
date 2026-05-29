import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    correo: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================
  // LOGIN
  // ==========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const res = await fetch(
        "http://localhost:4000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await res.json();

      // para mostrar ERROR
      if (!res.ok) {

        setError(data.msg || "Credenciales incorrectas");

        setLoading(false);

        return;
      }

      // ==========================
      // GUARDAR LOGIN
      // ==========================

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "usuario",
        JSON.stringify(data.user)
      );

      alert("Login correcto ");

      // ==========================
      // REDIRECCIONAR
      // ==========================

      navigate("/productos");

    } catch (err) {

      console.log(err);

      setError(
        "Error de conexión con el servidor"
      );

    }

    setLoading(false);

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* TITULO */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-3">
          Bienvenido
        </h1>

        <p className="text-center text-gray-500 mb-8 text-lg">
          Inicia sesión para continuar
        </p>

        {/* ERROR */}
        {error && (

          <div className="bg-red-100 text-red-600 text-center p-4 rounded-2xl mb-5 font-semibold">

            {error}

          </div>

        )}

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >

          {/* CORREO */}
          <div>

            <label className="block mb-2 text-sm font-bold text-gray-700">

              Correo

            </label>

            <input
              type="email"
              placeholder="correo@gmail.com"
              value={form.correo}
              onChange={(e) =>
                setForm({
                  ...form,
                  correo: e.target.value
                })
              }
              className="  w-full  p-3  border  border-gray-300  rounded-2xl  focus:outline-none  focus:ring-4  focus:ring-blue-400  text-lg " />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block mb-2 text-sm font-bold text-gray-700">

              Contraseña

            </label>

            <input
              type="password"
              placeholder="********"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
              className=" w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-400 text-lg "/>

          </div>

          {/* BOTON */}
          <button
            type="submit"
            disabled={loading}
            className=" w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white  font-bold py-3 rounded-2xl text-xl transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95  " >

            {loading ? "Entrando..." : "Entrar"}

          </button>

        </form>

        {/* REGISTRO */}
        <p className="text-center text-gray-600 mt-8 text-lg">

          ¿No tienes cuenta?

        </p>

        <Link
          to="/registro"
          className=" block text-center mt-2 text-blue-600 font-bold hover:text-blue-800 text-lg" >

          Crear cuenta

        </Link>

      </div>

    </div>

  );

}