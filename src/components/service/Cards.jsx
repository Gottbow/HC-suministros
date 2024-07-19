const Cards = (props) => {
  return (
    <div class=" md:w-5/12 lg:w-3/12 sm:m-0 ml-4 mr-4 p-3 grid gap-6 items-start text-center">
      <div class="flex flex-col h-full bg-white rounded-2xl overflow-hidden transform transition-all hover:-translate-y-2 duration-300">
        <img class="h-72" src={props.image} alt="" />

        <div class="flex-1 flex flex-col p-6">
          <div class="flex-1">
            <header class="mb-2">
              <h2 class="text-xl font-extrabold leading-snug">
                <a
                  class="font-bold text-[23px] mb-4"
                  href="#0"
                >
                  {props.name}
                </a>
              </h2>
            </header>

            <div class="text-m text-gray-600 text-justify mb-4">
              <p>{props.description}</p>
            </div>
          </div>

          <div class="flex justify-center space-x-2">
            <a
              class="inline-flex text-white  justify-center whitespace-nowrap rounded-lg bg-[#080808] px-3 py-2 text-sm font-medium text-slate-500 hover:bg-[#791519]  transition-colors"
              href=""
            >
              CONTRATAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
