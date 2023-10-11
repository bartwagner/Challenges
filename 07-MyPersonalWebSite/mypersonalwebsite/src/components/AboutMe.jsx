import React from "react"
import aboutme from './database/aboutme'
import Paragraph from "./subcomponents/Paragraph"

export default function AboutMe() {
    const aboutMeParagraph = aboutme.map(item => {
        return(
            <Paragraph 
                key={item.id}
                value={item.value}
            />
        )
    })
    return (
        <section className="aboutme-div" id="aboutMe">
            <h1 className="comp-subpar">About me</h1>
            <div className="comp-container">
                <div>
                    {aboutMeParagraph}
                </div>
                <img src="./src/images/wagner.jpg" className="photo-wagner" />
            </div>
        </section>
    )
}