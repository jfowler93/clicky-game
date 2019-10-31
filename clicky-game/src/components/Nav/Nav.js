import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li id="title">
                <span className = "header">{props.title}</span>
            </li>

            <li id="message">{props.message}</li>
            <li id="gameScore">Current Score: {props.score}</li>
            <li id="highScore">Top Score: {props.highScore}</li>
        </ul>
    </nav>
)

export default Nav;