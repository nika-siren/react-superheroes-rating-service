import React from "react";
import Hero from "./Superhero";
import heroesData from "./data.json";

const HeroesPage = () => {
  return (
    <div>
      <h1>Superheroes Cards</h1>
      <div className="gallery">
        {heroesData.map((hero) => (
          <Hero key={hero.name} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default HeroesPage;
