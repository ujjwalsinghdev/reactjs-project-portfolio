import React from "react"

import "./Project.css"

const Project = ({ stacks }) => {
  return (
    <div>
      <h2 className="project-title">Tech Stack/Concept Used</h2>
      {stacks.map((item) => {
        const { skills, id, url, img, desc, title } = item
        return (
          <div key={id} className="project-section">
            <div className="project-img">
              <img src={img} alt={img} />
            </div>
            <div className="project-details">
              <h3> 💻 {title}</h3>
              <p> 📋 {desc}</p>
              <hr />
              <h3> ⚙️ Tech Used :</h3>
              <h4> 👨🏻‍💻 {skills}</h4>
              <div className="project-button">
                <a rel="noopener noreferrer" className="btn" href={url} target="_blank">
                  Live Preview ✅
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project
