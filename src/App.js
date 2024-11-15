import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './App.css';

const App = () => {
  // Sample list of food locations (replace this with real data later)
  const foodLocations = [
    { name: "Pizza Hut", type: "Pizza", id: 1 },
    { name: "Taco Bell", type: "Mexican", id: 2 },
    { name: "Burger King", type: "Burgers", id: 3 },
    { name: "Subway", type: "Sandwiches", id: 4 }
  ];

  // This state will store the places that both users swipe right on
  const [swipedRight, setSwipedRight] = useState([]);

  // Function to handle swiping right (user selects a location)
  const handleSwipeRight = (foodLocation) => {
    setSwipedRight((prev) => [...prev, foodLocation]);
  };

  // Function to handle swiping left (user does not select a location)
  const handleSwipeLeft = (foodLocation) => {
    // Do nothing for now, can add functionality if needed
  };

  return (
    <div className="App">
      <h1>Food Match App</h1>
      <div>
        <h2>Swipe to Choose Your Food!</h2>
        <SwipeableViews>
          {foodLocations.map((location) => (
            <div key={location.id} className="food-card">
              <h3>{location.name}</h3>
              <p>{location.type}</p>
              <div className="swipe-actions">
                <button onClick={() => handleSwipeLeft(location)}>👎 Swipe Left</button>
                <button onClick={() => handleSwipeRight(location)}>👍 Swipe Right</button>
              </div>
            </div>
          ))}
        </Swipeab
