import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const PokemonGallery = () => {
  const [pokemons, updatePokemons] = useState([]);

  const renderPokemons = () => {
    return pokemons.map((pokemonInfo) => {
      return <PokemonCard key={pokemonInfo.id} info={pokemonInfo} />;
    });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/pokemons`).then((res) => {
      updatePokemons(res.data);
    });
  }, []);

  return (
    <div>
      <h1>PokemonGallery</h1>
      <div>{renderPokemons()}</div>
    </div>
  );
};

export default PokemonGallery;
