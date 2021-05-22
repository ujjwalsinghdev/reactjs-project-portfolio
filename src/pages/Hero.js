import React from "react"

import dev from "../svg/dev.svg"

import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>React Projects</h1>
        <h3>Production Ready Projects That I Have Developed</h3>
      </div>
      <div className="hero-img">
        <img src={dev} alt="" />
      </div>
    </div>
  )
}

export default Hero
