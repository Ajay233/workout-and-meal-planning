import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return(
        <div className={"navBar"}>
            <span className={"navLink"}>Link 1</span>
            <span className={"navLink"}>Link 2</span>
            {/*<Link className={"navLink"} to={"/"}>Workout</Link>*/}
            {/*<Link className={"navLink"} to={"/"}>Meal plans</Link>*/}
        </div>
    );
}

export default NavBar;