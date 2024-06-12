import { useState, useEffect } from "react";

const Fetch = ({ pokemonName }) => {
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let imageData = data.sprites.other.dream_world;
        setPhoto(imageData["front_default"]);
      });
  }, []);
  return <img key={1} src={photo} alt={"test"} width={100} />;
};
export default Fetch;
