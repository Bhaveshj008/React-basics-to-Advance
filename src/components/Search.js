import React, { useState, useEffect } from "react";
import restaurantsList from "../assets/config"; // Assuming this fetches data from the API
import { useLocation, useNavigate } from "react-router-dom";

function Search({ onSearch }) {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);

        // Check if the current URL is not "/home"
        if (location.pathname !== "/") {
            navigate("/"); // Redirect to Home if not already there
        }
    };

    // useEffect to fetch the restaurant data once when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const data = await restaurantsList(); // Fetch the restaurant data
            setRestaurants(data); // Store the fetched data in the state
            onSearch(data); // Initially show all restaurants
        };

        fetchData();
    }, []); // Add onSearch as a dependency

    // useEffect to handle search input with debounce
    useEffect(() => {
        const handler = setTimeout(() => {
            console.log("Debounce activated, filtering data with:", searchText);
            filterData(searchText);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchText]);

    // Function to filter restaurants based on search query
    function filterData(searchText) {
        if (searchText === '') {
            onSearch(restaurants); // Show all restaurants if search text is empty
            return;
        }

        const filteredRestaurants = restaurants.filter((restaurant) => {
            const searchableString = Object.values(restaurant.info)
                .filter(value => typeof value === 'string' || Array.isArray(value)) // Only include strings or arrays (e.g., cuisines)
                .flat() // Flatten arrays (like cuisines)
                .join(' ') // Join all values into one string for searching
                .toLowerCase(); // Make it case-insensitive

            return searchableString.includes(searchText.toLowerCase()); // Match searchText
        });

        onSearch(filteredRestaurants); // Send filtered results to the parent component
    }

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Order your favourite food here"
                value={searchText}
                onChange={handleSearchChange} // Update search text state
            />
        </div>
    );
}

export default Search;
