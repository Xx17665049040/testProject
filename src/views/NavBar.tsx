import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="navCla">
                    <li><a href='/Home'>Home</a></li>
                    <li><a href='/About'>About</a></li>
                    <li><a href='/Contact' >Contact</a></li>

                </ul>
            </nav>
        )
    }
}