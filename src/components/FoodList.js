import React from 'react';
import SwipeButton from './SwipeButton';  // Import button component

function FoodList({ foodLocations, onSwipeRight }) {
  return (
    <div className="food-list">
      {foodLocations.map((food) => (
        <div key={food.id} className="food-item">
          <h2>{food.name}</h2>
          <p>{food.address}</p>
          <SwipeButton onClick={() => onSwipeRight(food.id)} />
        </div>
      ))}
    </div>
  );
}

export default FoodList;
