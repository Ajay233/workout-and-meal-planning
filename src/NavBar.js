import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return(
        <div className={"navBar"}>
            <span className={"navLink"}>Workouts</span>
            <span className={"navLink"}>Meal plans - Coming Soon :)</span>
        </div>
    );
}

export default NavBar;