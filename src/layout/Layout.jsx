import React from "react";
import Menu from "../components/menu/Menu";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* HEADER */}
      <header className="bg-white shadow-md py-4">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Tienda 🏠 Cruz
        </h1>
      </header>

      {/* CONTENIDO */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto bg-white m-6 p-6 rounded-xl shadow-md">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-10">
        <p className="font-semibold">Tienda de Electrónicos</p>
        <p>Contacto: jacintocruzdeara@gmail.com</p>
        <p>Tel: 919-133-0682</p>
        <p className="text-gray-400 text-sm mt-2">© 2026</p>
      </footer>

    </div>
  );
}