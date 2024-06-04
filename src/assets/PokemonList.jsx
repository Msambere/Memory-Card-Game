import { v4 as uuid4 } from "uuid";

const pokemonList = [
  { id: uuid4(), name: "pikachu" },
  { id: uuid4(), name: "charizard" },
  { id: uuid4(), name: "eevee" },
  { id: uuid4(), name: "bulbasaur" },
  { id: uuid4(), name: "umbreon" },
];

export { pokemonList };
