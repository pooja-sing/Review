import React from "react";

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round((rating / 10) * maxStars);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < filledStars) {
        stars.push(
          <span key={i} style={{ color: "#FFD700" }}>
            &#9733;
          </span>
        ); 
      } else {
        stars.push(
          <span key={i} style={{ color: "#ccc" }}>
            &#9733;
          </span>
        ); 
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
