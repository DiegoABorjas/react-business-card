import React from "react"
import cardImage from "../images/card-image.png"
import "./styles.css"

export default function Info() {
    return (
        
        <div className="info">
                <img src={cardImage} className="info-img" />
                <h1 className="name" >Laura Smith</h1>
                <h4 className="title" >Frontend Developer</h4>
                <p className="email" >laurasmith.website</p>
                <button className="button" >Email</button>
        </div>
    )
}