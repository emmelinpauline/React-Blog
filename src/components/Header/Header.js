import React, { Component } from "react";
import { Link } from "react-router-dom";
//import logo from "./logo.svg"
//import "./Header.css";

export default class Header extends Component {
    render() {
        return (
             <header className="Header">
                 {/* <img src="" className="Header-logo" alt="logo"/> */}
                 <h1 className="Header-title">Welcome to React</h1>
                 <ul className="Header-menu">
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/About"> About </Link>
                    </li>
                    <li>
                        <Link to="/Article"> Article </Link>
                    </li>
                    <li>
                        <Link to="/Page"> Page </Link>
                    </li>
                 </ul>
             </header>
        )
    }
}
