import React from "react"

export default function Navbar() {
    return (
        <nav className="nav-menu">
            <img src="./src/images/logo.jpg" className="nav-logo" />
            <div className="nav-div-par">
                <p className="nav-par">Welcome to my Website</p>
                <p className="nav-par">by Wagner Araujo</p>
            </div>
            <div className="nav-link">
                <ul className="link-ul">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}