import React from "react";
import CardsContainer from "../components/service/CardsContainer";
import Cards from "../components/service/Cards";
import data from "../data/cards.json";

export default function Servicios() {
  return (
    <>
      <CardsContainer>
        {data.map((card) => (
          <Cards
            image={card.image}
            name={card.name}
            description={card.description}
          />
        ))}
      </CardsContainer>
    </>
  );
}
