import React from "react";

export default function ServHome() {
  return (
    <div className="relative mb-5 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://i.imgur.com/gO022gq.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Servicios</h2>
        <p className="sm:text-lg text-base md:text-center text-gray-200 text-justify">En HC Suministros ofrecemos una amplia gama de servicios industriales
          donde nos destacamos por cumplir con los más altos estándares de
          calidad, seguridad y sostenibilidad. Nos aseguramos de que cada
          material cumpla rigurosamente con las normas y estándares
          internacionales. Además, contamos con técnicos altamente calificados
          para la ejecución de todos nuestros servicios.</p>

        <a
          type="button"
          href="/Servicios"
          className="mt-12 bg-[#791519] hover:text-white px-5 py-2 rounded-md ">
          VER MAS
        </a>
      </div>
    </div>
  );
}
