import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardLoader from "./Components/CardLoader";
import { pokemonList } from "./assets/PokemonList";

function App() {
  return (
    <>
      <Header />
      <div className="gameboard">
        <CardLoader renderList={pokemonList} />
      </div>
      <Footer />
    </>
  );
}

export default App;
