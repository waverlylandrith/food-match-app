const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual API key

export const fetchNearbyFood = async () => {
  const location = '37.7749,-122.4194'; // Example: San Francisco (latitude, longitude)
  const radius = 5000;  // 5 kilometers (you can change it as needed)
  const type = 'restaurant';

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${API_KEY}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  // Process the results and return them
  return data.results.map(place => ({
    id: place.place_id,
    name: place.name,
    address: place.vicinity,
  }));
};
