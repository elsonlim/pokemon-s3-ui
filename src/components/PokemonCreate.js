import React, { useState } from "react";
import axios from "axios";

const PokemonCreate = () => {
  const [id, updateId] = useState(0);
  const [name, updateName] = useState("");
  const [file, updateFile] = useState();

  const uploadPokemon = async (name, file) => {
    const server = process.env.REACT_APP_SERVER_URL;
    const { uploadLink } = await axios
      .get(`${server}/pokemons/getSignedUrl`)
      .then((res) => res.data);

    const imageUrl = await axios
      .put(uploadLink, file, {
        headers: { "Content-Type": file.type },
      })
      .then((res) => {
        return res.config.url.split("?")[0];
      });

    if (!imageUrl) {
      return;
    }

    await axios.post(`${server}/pokemons`, {
      name,
      imageUrl,
    });

    alert("Pokemon added");
  };

  return (
    <div>
      <div>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          min={0}
          max={999}
          onChange={(event) => updateId(event.target.value)}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => updateName(event.target.value)}
        />
      </div>
      <div>
        <label>image:</label>
        <input
          type="file"
          accept="image/png"
          onChange={(event) => updateFile(event.target.files[0])}
        />
      </div>
      <button onClick={() => uploadPokemon(name, file)}>Upload Pokemon</button>
    </div>
  );
};

export default PokemonCreate;
