import React from "react"

import dev from "../svg/dev.svg"

import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>ReactJS Project Highlights</h2>
        <h4>Over the last 2+ I have worked on several interesting projects, Below is a small selection of those that have made a significant impact on me as a developer.</h4>
      </div>
      <div className="hero-img">
        <img src={dev} alt="" />
      </div>
    </div>
  )
}

export default Hero
