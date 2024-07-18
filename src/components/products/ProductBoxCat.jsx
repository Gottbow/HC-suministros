export default function ProductBoxCat ({productCat}) {
  return (
    <div className="h-auto w-auto mx-2 rounded-2xl flex-shrink-0 bg-[--clr-rojo] transition-transform lg:hover:scale-110">
    <div className="rounded-t-2xl overflow-hidden h-auto relative">
      <img
        className="rounded-t-2xl"
        src={`/src/assets/images/${productCat.id}.webp`}
        alt={productCat.nombre}
      />
      <span className="absolute bottom-2 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-blue-100">
        {productCat.categoria}
      </span>
    </div>
    <div className="px-2 md:px-3 py-2 flex flex-col gap-1.5 text-sm">
      <h2 className="text-sm font-bold whitespace-normal text-white line-clamp-2">
        {productCat.nombre}
      </h2>
      <p className="text-white text-sm">
        {productCat.codigo}
      </p>
      <button className="bg-white text-[--clr-rojo] border-white border-solid border-2 py-1 rounded-3xl hover:bg-[--clr-rojo] hover:text-white">
        Ver Producto
      </button>
    </div>
  </div>
  )
}