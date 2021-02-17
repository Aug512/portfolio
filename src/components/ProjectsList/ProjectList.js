import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function ProjectsList({ projects, lang }) {

  const title = lang === 'RU' ? 'Текущие проекты' : 'Current projects'

  return(
    <div className='projectsList'>
      <h2 className='projectsList__title'>{title}</h2>
      {projects.map(project => <ProjectCard key={project.id} data={project} lang={lang} />)}
    </div>
  )
}