import React from "react";

function PokemonCard({ info }) {
  return (
    <div>
      <h3>{info.name}</h3>
      <img src={info.imageUrl} alt="pokemon" />
    </div>
  );
}

export default PokemonCard;
