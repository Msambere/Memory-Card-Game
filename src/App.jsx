import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import CardLoader from "./Components/CardLoader";

function App() {
  return (
    <>
      <Header />
      <div className="gameboard">
        <CardLoader />
      </div>
      <Footer />
    </>
  );
}

export default App;
