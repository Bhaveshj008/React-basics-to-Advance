import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
function Header({ onSearch }) {
    return <>
        <div className="Header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&s" alt="logo" />
                <h2>FoodVilla</h2>
            </div>
            <Search onSearch={onSearch} />

            <div className="navItems">
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/about'}>
                    <li>About</li>
                </Link>
                <Link to={'/contact'}>
                    <li>Contact</li>
                </Link>
                <Link to={'/services'}>
                    <li>Services</li>
                </Link>
            </div>
        </div>
    </>
}
export default Header;