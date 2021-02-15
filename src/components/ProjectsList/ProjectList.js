import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function ProjectsList({ projects, lang }) {
  return(
    <div className='projectsList'>
      <h2 className='projectsList__title'>Актуальные проекты:</h2>
      {projects.map(project => <ProjectCard key={project.id} data={project} lang={lang} />)}
    </div>
  )
}