import React from "react"
import Paragraph from "./subcomponents/Paragraph"
import contact from "./database/contact"

export default function Contact() {
    const contactParagraph = contact.map(item => {
        return(
                <Paragraph 
                    key={item.id}
                    value={item.value}
                />
        )
    })
    return (
        <div className="experience-div">
            <div className="dev-img-div">
                <img src="./src/images/developer.png" className="dev-img" />
                <h1 className="dev-text">Contact me</h1>
            </div>
            <br />
            <div className="comp-container">
                <div className="flex">
                    <div className="contact-inf">
                        <img src="./src/images/wagner.png" className="photo-wagner" />
                        <div>
                            {contactParagraph}
                            <div className="social-div">
                                <a href="https://www.linkedin.com/in/wagnergentilferreiradearaujo/" className="social-link">
                                    <img src="./src/images/linkedin.png" className="social-midia"/>
                                </a>
                                <a href="mailto: bartwagner@gmail.com" className="social-link">
                                    <img src="./src/images/gmail.png" className="social-midia"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="github-inf">What are your thoughts on this website?</p>
            <p className="github-inf">You can access the code on <a href="https://github.com/bartwagner/Challenges/tree/main/07-MyPersonalWebSite/mypersonalwebsite">my GitHub</a> repository</p>
            <p className="github-inf">Would you be interested in viewing additional code on my GitHub profile? <a href="https://github.com/bartwagner">GitHub</a></p>
        </div>
    )
}