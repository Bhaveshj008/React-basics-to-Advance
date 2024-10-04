// restaurantService.js

const getRestaurants = async () => {
  const isSmallScreen = window.innerWidth <= 1535;  // Example threshold for small screens (e.g., mobile)
  console.log(window.innerWidth)
  const mobileURL = 'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.875754&lng=75.3393195&carousel=true&third_party_vendor=1';
  const desktopURL = 'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.875754&lng=75.3393195&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

  const url = isSmallScreen ? mobileURL : desktopURL;

  try {
    const response = await fetch(url, {
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
      return [];  // Return an empty array or handle it as you see fit
    }
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return [];  // Return an empty array or handle it as you see fit
  }

 
};  


console.log(getRestaurants())
// Export the fetched data
export default getRestaurants;
