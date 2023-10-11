import React from "react"
import experience from "./database/experience"
import Paragraph from "./subcomponents/Paragraph"

export default function Experience() {

    const experienceParagraph = experience.map(item => {
        return(
            <div>
                {
                item.InformationJob ? 
                    <div>
                        <p className="comp-paragraph-job">{item.InformationJob}</p>
                        <p className="comp-paragraph-period">{item.period}</p>
                    </div>
                : ""
                }
                <Paragraph 
                    key={item.id}
                    value={item.value}
                />
            </div>
        )
    })
    return (
        <section className="experience-div" id="experience">
            <h1 className="comp-subpar">Experience</h1>
            <div className="comp-container">
                <div>
                    {experienceParagraph}
                </div>
            </div>
        </section>
    )
}