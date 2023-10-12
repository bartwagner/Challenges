import React from "react"
import home from "./database/home"
import Paragraph from "./subcomponents/Paragraph"

export default function Home() {

    const homeParagraph = home.map(item => {
        return(
                <Paragraph 
                    key={item.id}
                    value={item.value}
                />
        )
    })

    return (
        <section>
            <div className="welcome-div">
                <img src="./src/images/developer.png" className="welcome-developer" />
                <h1 className="welcome">Welcome</h1>
            </div>
            <h1 className="comp-subpar">Home</h1>
            <div className="center-photo">
                <img src="./src/images/wagner.jpg" className="photo-wagner" />
            </div>
            <div>
                {homeParagraph}
            </div>
        </section>
    )
}