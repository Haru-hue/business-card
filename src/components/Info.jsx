import React from "react"
import image from "../about.jpg"

export default function Info () {
    return (
        <header>
            <img src={image} alt=""/>
            <div className="text-center">
                <h2>Joshua Uko</h2>
                <p className="color">Front-end Developer</p>
                <p className="website">joshua.website.co</p>
            </div>
            <div className="links">
                <a href = "mailto:ukojoshy@gmail.com"><button className="e-mail"><i className="fa-solid fa-envelope"></i> E-mail</button></a>
                <a href="https://github.com/Haru-hue"><button className="git-b"><i className="fa-brands fa-github"></i> Github</button></a>
            </div>
        </header>
    )
}