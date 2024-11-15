import React, { useState, useEffect } from 'react';
import './App.css';
import FoodList from './components/FoodList';  // Import FoodList component
import { fetchNearbyFood } from './utils/googleMapsApi';  // Import function to fetch food locations

function App() {
  const [foodLocations, setFoodLocations] = useState([]);
  const [swiped, setSwiped] = useState(new Set());

  useEffect(() => {
    // Fetch food locations when the component mounts
    fetchNearbyFood()
      .then((data) => setFoodLocations(data));
  }, []);

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
