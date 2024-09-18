import React from "react";
import Superhero from "./Superhero";
import superheroesData from "./data.json";

const SuperheroesList = () => {
  return (
    <div>
      <h1>Superheroes Cards</h1>
      <div className="gallery">
        {superheroesData.map((superhero) => (
          <Superhero key={superhero.name} superhero={superhero} />
        ))}
      </div>
    </div>
  );
};

export default SuperheroesList;
