const CardsContainer = (props) => {
  return (
    <div className=" pt-14 w-full min-h-screen gap-10 flex-wrap flex justify-center items-center pb-14 items-stretch h-full">
      {props.children}
      {props.id}
    </div>
  );
};
export default CardsContainer;
