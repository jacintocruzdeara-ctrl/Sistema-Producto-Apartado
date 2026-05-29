import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

export function Contacto() {

  const numeroWhatsApp = "529191330682";

  const mensaje = encodeURIComponent(
    "Hola 👋 quiero información sobre los productos de la tienda"
  );

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contacto
        </h1>

        <div className="space-y-4 text-gray-700">

          <div className="flex items-center gap-3">
            <EnvelopeIcon className="w-6 h-6 text-blue-600" />
            <span>jacintocruzdeara@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <PhoneIcon className="w-6 h-6 text-green-600" />
            <span>919-13-30-682</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPinIcon className="w-6 h-6 text-red-500" />
            <span>Sitala, Chiapas</span>
          </div>

        </div>

        {/* BOTÓN WHATSAPP */}
        <a
          href={urlWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition"
        >
          Enviar mensaje por WhatsApp 💬
        </a>

      </div>

    </div>
  );
}