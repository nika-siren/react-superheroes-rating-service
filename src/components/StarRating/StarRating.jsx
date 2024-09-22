import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "../Superhero/Superhero.css";
import "./StarRating.css";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => { 
    const savedRating = localStorage.getItem("rating"); 
    if (savedRating) { 
      setRating(Number(savedRating)); 
      setHover(Number(savedRating)); 
    } 
  }, []); 

  const handleRatingClick = (currentRating) => {
    setRating(currentRating);
    localStorage.setItem("rating", currentRating);
  };

  return (
    <div className="StarRating">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => handleRatingClick(currentRating)}
            />
            <FaStar
              className="star"
              size={50}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
  
}

export default StarRating;