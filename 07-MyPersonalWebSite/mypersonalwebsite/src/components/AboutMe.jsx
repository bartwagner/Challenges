import React from "react"
import aboutme from './database/aboutme'
import certifications from './database/certifications'
import languages from "./database/languages"
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
    const certificationsParagraph = certifications.map(item => {
        return(
                <Paragraph 
                    key={item.id}
                    value={item.value}
                />
        )
    })
    const languagesParagraph = languages.map(item => {
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
                <img src="./src/images/wagner.png" className="photo-wagner" />
            </div>
            <h1 className="comp-subpar">Certifications</h1>
            <div className="grid-div">
                {certificationsParagraph}
            </div>
            <h1 className="comp-subpar">Languages</h1>
            <div className="grid-div">
                {languagesParagraph}
            </div>
        </section>
    )
}