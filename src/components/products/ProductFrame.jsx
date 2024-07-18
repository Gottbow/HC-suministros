import React from "react";
import { Button } from "@nextui-org/react";
import PDF from "/src/assets/iconsjsx/PDF.jsx";

export default function ProductFrame() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-CVP">
      <div className="col-start-2 col-span-1 bg-red-500 grid grid-rows-CVPDIV">
        <div className="grid grid-cols-CVPTOP">
          <div className="grid grid-cols-6 grid-rows-7">
            <img
              className="row-span-6 col-span-6 p-4"
              src="/src/assets/images/A234CODO90.webp"
              alt=""
            />
            <Button className="w-[300px] col-span-7 mx-auto" color="success" endContent={<PDF />}>
            Descargar Ficha Técnica
            </Button>
          </div>
          <div className="grid grid-cols-7 grid-rows-7">
            <h2 className="col-span-6">Nombre del producto</h2>
            <button>X</button>
            <p className="row-start-3 col-span-2">codigo</p>
            <p className="row-start-4 col-span-2">conexion</p>
            <p className="row-start-5 col-span-2">tipo</p>
            <p className="row-start-6 col-span-2">extremos</p>
            <p className="row-start-7 col-span-2">material</p>
            <p className="row-start-8 col-span-2">schedule</p>
            <p className="row-start-9 col-span-2">normas de diseño</p>
          </div>
        </div>
        <div>
          <h2>iowmoiwmfoemwo</h2>
        </div>
      </div>
    </div>
  );
}
