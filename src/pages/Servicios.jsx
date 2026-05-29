import React from "react";
import {
  ShoppingCartIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

export function Servicios() {
  const servicios = [
    {
      title: "Apartado de productos",
      desc: "Puedes apartar productos y pagarlos después.",
      icon: ShoppingCartIcon,
      color: "text-blue-600"
    },
    {
      title: "Sin garantía",
      desc: "Algunos productos no cuentan con garantía.",
      icon: ShieldCheckIcon,
      color: "text-red-500"
    },
    {
      title: "Atención al cliente",
      desc: "Te ayudamos con cualquier duda o problema.",
      icon: ChatBubbleLeftRightIcon,
      color: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Servicios
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        En nuestra tienda ofrecemos diferentes servicios para ayudarte a obtener los mejores productos.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {servicios.map((s, i) => {
          const Icon = s.icon;

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >

              <Icon className={`w-10 h-10 mb-4 ${s.color}`} />

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {s.title}
              </h2>

              <p className="text-gray-600">
                {s.desc}
              </p>

            </div>
          );
        })}

      </div>
    </div>
  );
}