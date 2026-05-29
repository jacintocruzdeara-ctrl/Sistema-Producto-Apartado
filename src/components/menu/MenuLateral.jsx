import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Bars3Icon,
  HomeIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  UserIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";

export function MenuLateral({ children }) {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl transition ${
      isActive ? "bg-blue-600 text-white" : "text-gray-200 hover:bg-gray-700"
    }`;

  return (
    <div className="flex">

      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-gray-900 text-white flex items-center justify-center z-50 shadow-md">
        
        <button
          onClick={() => setOpen(!open)}
          className="absolute left-4 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>

        <h1 className="font-bold text-lg">Tienda Cruz</h1>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-14 left-0 h-full w-64 bg-gray-900 text-white p-4 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <nav className="flex flex-col gap-2">

          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            <HomeIcon className="w-5 h-5" />
            Inicio
          </NavLink>

          <NavLink to="/productos" className={linkClass} onClick={() => setOpen(false)}>
            <ShoppingBagIcon className="w-5 h-5" />
            Productos
          </NavLink>

          <NavLink to="/apartados" className={linkClass} onClick={() => setOpen(false)}>
            <ClipboardDocumentListIcon className="w-5 h-5" />
            Apartados
          </NavLink>

          <NavLink to="/servicios" className={linkClass} onClick={() => setOpen(false)}>
            <WrenchScrewdriverIcon className="w-5 h-5" />
            Servicios
          </NavLink>

          <NavLink to="/contacto" className={linkClass} onClick={() => setOpen(false)}>
            <PhoneIcon className="w-5 h-5" />
            Contacto
          </NavLink>

          <NavLink to="/login" className={linkClass} onClick={() => setOpen(false)}>
            <UserIcon className="w-5 h-5" />
            Login
          </NavLink>

        </nav>

        <div className="mt-6 border-t border-gray-700 pt-4">
          <NavLink
            to="/panel"
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
            onClick={() => setOpen(false)}
          >
            🛠 Panel
          </NavLink>
        </div>

      </div>

      {/* CONTENIDO */}
      <div className="flex-1 mt-14 p-6 bg-gray-100 min-h-screen">
        {children}
      </div>

    </div>
  );
}