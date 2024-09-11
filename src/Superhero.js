import React from 'react';
import "./App.css";
import StarRating from "./StarRating";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.url} alt={hero.name} />
      <h2>{hero.name}</h2>
      <p><strong>Alter Ego:</strong> {hero.alterego}</p>
      <p><strong>Universe:</strong> {hero.universe}</p>
      <p><strong>Occupation:</strong> {hero.occupation}</p>
      <p><strong>Friends:</strong> {hero.friends}</p>
      <p><strong>Superpowers:</strong> {hero.superpowers}</p>
      <React.StrictMode>
        <StarRating/>
      </React.StrictMode>
    </div>
  );
}

export default Hero;
