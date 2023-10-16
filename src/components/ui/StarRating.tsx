import React from 'react'
interface StarRatingProps {
    rate: number;
    count: number;
  }
  
export function StarRating({rate, count}: StarRatingProps) {
// Number of full stars to display
const fullStarsCount = Math.floor(rate);
// Determine if there should be a half star
const hasHalfStar = rate % 1 >= 0.5;
// Number of empty stars to display
const emptyStarsCount = 5 - fullStarsCount - (hasHalfStar ? 1 : 0);

return (
  <div>
    <span className="stars">
      {/* Render full stars */}
      {Array(fullStarsCount).fill("★").map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      {/* Render half star if needed */}
      {hasHalfStar && <span>⯪</span>}
      {/* Render empty stars */}
      {Array(emptyStarsCount).fill("☆").map((star, index) => (
        <span key={`empty-${index}`}>{star}</span>
      ))}
    </span>
    <span className="reviews">({count} reviews)</span>
  </div>
);
};

