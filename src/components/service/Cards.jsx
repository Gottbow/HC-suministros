const Cards = (props) => {
  return (
      <>
     <div class="sm:w-3/12 sm:m-0 ml-4 mr-4 p-3 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 text-center">
      {/* imagen */}
      <img class=" h-72 rounded-xl block" src={"./images/1.jpg"} alt="" />
      <div class="p-2">
        {/* titulo */}
        <h2 class="font-bold text-2xl mb-4 ">{props.name}</h2>
        {/* descripción */}
        <p class="grow text-m text-gray-600 text-justify">{props.description}</p>
      </div>
      {/* boton */}
      <div class="m-2">
        <a
          role="button"
          href="#"
          class="text-white bg-[#080808] px-3 py-1 rounded-md hover:bg-[#791519] "
        >
          CONTRATAR
        </a>
      </div>
    </div>
      </>
      
  );
};
export default Cards
