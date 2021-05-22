import React, { useState } from "react"

import Project from "./Project"

import data from "../data"

const Projects = () => {
  // eslint-disable-next-line no-unused-vars 
  const [stacks, setStacks] = useState(data)

  return (
    <>
      <Project stacks={stacks}></Project>
    </>
  )
}

export default Projects
