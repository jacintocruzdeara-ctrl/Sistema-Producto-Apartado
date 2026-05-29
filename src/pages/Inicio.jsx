import React from "react";
import { Link } from "react-router-dom";

export function Inicio() {

  const pasos = [
    {
      step: "01",
      title: "Explora el catálogo",
      description:
        "Descubre una variedad de productos como galletas, snacks y bebidas.",
    },
    {
      step: "02",
      title: "Selecciona tu producto",
      description:
        "Elige tus productos favoritos y resérvalos fácilmente.",
    },
    {
      step: "03",
      title: "Administra tus apartados",
      description:
        "Revisa y controla todos tus productos apartados en un solo lugar.",
    },
  ];

  const productos = [
    {
      icon: "🍪",
      title: "Galletas",
      text: "Dulces y crujientes, perfectas para cualquier momento.",
    },
    {
      icon: "🥤",
      title: "Bebidas",
      text: "Refrescos y jugos para acompañar tus snacks favoritos.",
    },
    {
      icon: "🍫",
      title: "Chocolates",
      text: "Sabores intensos para los amantes del dulce.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Sistema de Apartado
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Aparta tus productos de forma
              <span className="text-blue-600"> rápida y segura</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Explora productos como galletas, bebidas y chocolates,
              resérvalos fácilmente y administra tus apartados desde una sola plataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/productos"
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition shadow-lg text-center"
              >
                Ver Catálogo
              </Link>

              <Link
                to="/login"
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition text-center"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              ¿Cómo funciona?
            </h2>

            <div className="space-y-6">
              {pasos.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {productos.map((producto) => (
            <div
              key={producto.title}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{producto.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {producto.title}
              </h3>
              <p className="text-slate-600">{producto.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}