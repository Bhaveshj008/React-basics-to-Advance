async function getRestaurants() {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.875754&lng=75.3393195&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'Referer': 'https://www.swiggy.com/',
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
  
    
      const restaurantsCard = json.data.cards.find(card => card.card.card && card.card.card.id === "top_brands_for_you"); // Adjust ID if necessary
  
      if (restaurantsCard && restaurantsCard.card.card && restaurantsCard.card.card.gridElements) {
        const restaurants = restaurantsCard.card.card.gridElements.infoWithStyle.restaurants;
        return restaurants;  // Now you can work with the restaurants data
      } else {
        console.error("Restaurants card or grid elements not found");
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  }
  

 async function fetchData() {
    const data = await getRestaurants();
    console.log(data)
 }
 fetchData();