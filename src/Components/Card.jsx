import Fetch from "../Fetch";
import CapitalizeName from "./CapitalizeName";

export default function Card({ pokemonName, handleCardClick }) {
  return (
    <div className="card-box" onClick={handleCardClick}>
      <div className="img-holder">
        <Fetch pokemonName={pokemonName} />
      </div>
      <CapitalizeName pokemanName={pokemonName} />
    </div>
  );
}
