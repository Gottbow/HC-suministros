const CardsContainer = (props) => {
  return (
    <div class=" pt-14 w-full justify-items-center min-h-screen gap-10 flex-wrap flex justify-center items-center bg-[#080808] pb-14 items-stretch h-full">
      {props.children}
    </div>
  );
};
export default CardsContainer;
