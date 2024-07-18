import React from "react";

export default function ServHome() {
  return (
    <section class="mb-4 text-center mx-auto bg-[#101010] bg-[url('')]">
      <div class="container  bg-card p-10 rounded-large">
        <h2 class="text-white px-4 md:text-5xl text-4xl pt-16 pb-4 mb-2 text-black font-medium font-roboto">
          Servicios
        </h2>
        <p class="text-white px-4 md:text-2xl text-xl text-black pb-12 text-justify md:pr-10 font-roboto">
          En HC Suministros ofrecemos una amplia gama de servicios industriales
          donde nos destacamos por cumplir con los más altos estándares de
          calidad, seguridad y sostenibilidad. Nos aseguramos de que cada
          material cumpla rigurosamente con las normas y estándares
          internacionales. Además, contamos con técnicos altamente calificados
          para la ejecución de todos nuestros servicios.
        </p>
        <a
          role="button"
          href="/Servicios"
          class="text-black bg-white hover:text-white px-5 py-2 rounded-md hover:bg-[#791519] "
        >
          VER MÁS
        </a>
      </div>
    </section>
  );
}
