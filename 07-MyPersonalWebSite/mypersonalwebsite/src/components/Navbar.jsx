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
                    <li>
                        <a href="/" className="link">Home</a>
                    </li>
                    <li>
                        <a href="/aboutMe" className="link">About Me</a>
                    </li>
                    <li>
                        <a href="/experience" className="link">Experience</a>
                    </li>
                    <li>
                        <a href="/projects" className="link">Projects</a>
                    </li>
                    <li>
                        <a href="/skills" className="link">Skills</a>
                    </li>
                    <li>
                        <a href="/contact" className="link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}