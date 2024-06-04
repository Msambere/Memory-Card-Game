import Fetch from "../Fetch";

export default function Card({ pokemonName }) {
  return (
    <div className="card-box">
      <div className="img-placeholder">
        <Fetch pokemonName={pokemonName} />
      </div>
      <p className="card-title">{pokemonName}</p>
    </div>
  );
}
