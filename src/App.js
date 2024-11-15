import React, { useState } from 'react';
import './App.css';
import FoodList from './components/FoodList'; // Import FoodList component

function App() {
  // Predefined list of restaurants (no API calls needed)
  const [foodLocations, setFoodLocations] = useState([
    {
      id: 1,
      name: "Joe's Pizza",
      address: "123 Pizza St, New York, NY",
    },
    {
      id: 2,
      name: "Sushi World",
      address: "456 Sushi Blvd, New York, NY",
    },
    {
      id: 3,
      name: "Taco Heaven",
      address: "789 Taco Rd, New York, NY",
    },
    {
      id: 4,
      name: "Burger King",
      address: "101 Burger Ln, New York, NY",
    },
  ]);

  const [swiped, setSwiped] = useState(new Set());

  const handleSwipeRight = (foodId) => {
    setSwiped(new Set(swiped.add(foodId))); // Mark food as swiped
  };

  return (
    <div className="App">
      <h1>Food Match App</h1>
      <FoodList foodLocations={foodLocations} onSwipeRight={handleSwipeRight} />
    </div>
  );
}

export default App;
