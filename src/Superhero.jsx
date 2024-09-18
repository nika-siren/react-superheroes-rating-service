import React from 'react';
import "./Superhero.css";
import StarRating from "./StarRating";

const Superhero = ({ superhero }) => {
  return (
    <div className="superhero">
      <img src={superhero.url} alt={superhero.name} />
      <h2>{superhero.name}</h2>
      <p><strong>Alter Ego:</strong> {superhero.alterego}</p>
      <p><strong>Universe:</strong> {superhero.universe}</p>
      <p><strong>Occupation:</strong> {superhero.occupation}</p>
      <p><strong>Friends:</strong> {superhero.friends}</p>
      <p><strong>Superpowers:</strong> {superhero.superpowers}</p>
      <React.StrictMode>
        <StarRating/>
      </React.StrictMode>
    </div>
  );
}

export default Superhero;
