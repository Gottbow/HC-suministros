import ProductBoxCat from "./ProductBoxCat";
import productCat from './prodCatalogo.json';

export default function ProductCatSec() {
  const productsTotal = [...productCat];
  return (
    <section className="">
      <article className="w-full py-10 bg-[--clr-rojo]">
        <h2 className=" text-center text-3xl text-white font-bold">
          Productos
        </h2>
      </article>
      <article className="my-5">
        <div className="w-full">
          <div className="whitespace-nowrap grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-row-auto grid-flow-row gap-y-6 justify-items-center">
            {productsTotal.map((productCat, index) => (
              <ProductBoxCat productCat={productCat} key={index} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
