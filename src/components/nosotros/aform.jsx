import React from "react";

const Aform = () => {
  return (
    <div className="container mx-auto my-5 max-h-full flex flex-col rounded-lg bg-white pt-12">
      <div className="container mx-auto my-32 flex flex-col items-center gap-16">
        <div className="flex flex-col gap-7">
          <div className="mx-auto flex w-10/12 flex-col gap-2 px-6 text-center">
            <h2 className="text-dark-grey-900 text-6xl font-bold leading-tight lg:text-7xl">
              GRACIAS POR CONTACTARTE CON HC SUMINISTROS
            </h2>
            <p className="text-dark-grey-600 text-lg font-medium leading-7">
              En breve estaremos comunicandonos con usted
            </p>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="/Nosotros"
              className="hover:bg-red focus:ring-purple-blue-100 flex items-center justify-center rounded-xl bg-[#791519] px-6 py-3 text-white transition duration-300 focus:ring-4"
            >
              REGRESAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aform;
