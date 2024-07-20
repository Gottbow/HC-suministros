const Cards = (props) => {
  return (
    <div className="md:w-5/12 2xl:w-3/12 xl:w-3/12 sm:m-0 m-4 grid gap-6 items-start text-center">
      <div className="flex flex-col h-full bg-[--clr-rojo] rounded-2xl overflow-hidden transform transition-all hover:-translate-y-0 md:hover:-translate-y-2 duration-300">
        <img className="" src={props.image} alt="" />

        <div className="flex-1 flex flex-col p-6">
          <div className="flex-1">
            <header className="mb-2">
              <h2 className="text-xl font-extrabold leading-snug">
                <a className="font-bold text-[23px] mb-4 text-white" key={props.id} href="#0">
                  {props.name}
                </a>
              </h2>
            </header>

            <div className="text-m text-white text-justify mb-4">
              <p >{props.description}</p>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <a
              className="inline-flex justify-center whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-medium text-[--clr-rojo] border-solid border-1 border-[--clr-rojo] hover:text-white hover:bg-[--clr-rojo] hover:border-white transition-colors"
              href=""
            >
              COTIZAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
