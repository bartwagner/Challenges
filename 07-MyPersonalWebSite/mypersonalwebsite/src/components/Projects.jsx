import React from "react"
import Paragraph from "./subcomponents/Paragraph"
import projects from "./database/projects"

export default function Projects() {
    const projectsParagraph = projects.map(item => {
        return(
                <Paragraph 
                    key={item.id}
                    value={item.value}
                />
        )
    })
    return (
        <section className="experience-div">
            <h1 className="comp-subpar">Projects</h1>
            <div className="comp-container">
                <div className="flex">
                    {projectsParagraph}
                </div>
            </div>
            <div className="project-div">
                <div className="project-card">
                    <div className="project-inf">
                        <img src="./src/images/Itau.jpg" className="itau-img"/>
                        <div className="itau-inf">
                            <p>In this project, I had the privilege of working both as a member of the development team and as a Scrum Master for a period of 5 months. It's worth noting that this website belongs to the largest bank in Latin America, Itaú.</p>
                            <p>On this website, clients have the ability to buy and sell various assets in the Brazilian financial market, including stocks, options, derivatives, government bonds, and more. To make this possible, we utilized a variety of technologies such as HTML, CSS, JavaScript, C#, and Hibernate, in addition to integrations with other technologies within the bank.</p>
                            <p>If you'd like to take a look, please visit:</p>
                            <p>https://www.itaucorretora.com.br/.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}