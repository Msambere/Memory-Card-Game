import Fetch from "../Fetch";

export default function Card({ pokemonName, handleCardClick }) {
  return (
    <div className="card-box" onClick={handleCardClick}>
      <div className="img-holder">
        <Fetch pokemonName={pokemonName} />
      </div>
      <p className="card-title">{pokemonName}</p>
    </div>
  );
}
