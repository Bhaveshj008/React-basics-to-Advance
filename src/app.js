import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import getRestaurants from "./assets/config"; // Assuming this is the API call function
import RestoMenu from "./components/RestoMenu"

function Layout({ onSearch }) {
    return (
        <>
            <Header onSearch={onSearch} />
            <Outlet />
            <Footer />
        </>
    );
}

function App() {
    const [restaurants, setRestaurants] = useState([]); // Empty array initially
    useEffect(() => {
        const fetchData = async () => {
            const data = await getRestaurants(); // Call the API to get restaurant data
            setRestaurants(data); // Store the fetched data in the state
        };

        fetchData();
    }, []);

    // This function gets called when search is done and updates the restaurants state
    function getData(filteredRestaurants) {
        setRestaurants(filteredRestaurants);
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout onSearch={getData} />, // Passing getData as the prop
            children: [
                {
                    path: "/",
                    element: <Restaurants restaurants={restaurants} /> // Pass restaurants data to Restaurants component
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/services",
                    element: <Services />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/restaurant/:id",
                    element: <RestoMenu />
                }
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
