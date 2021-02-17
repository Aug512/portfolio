import React from 'react'

const ProjectCard = ({ data, lang }) => {

  const additionalTabIndex = 3

  const getDictionary = (lang, dict) => {
    return (lang === 'RU') ? dict.RU : dict.EN
  }

  const localDictionary = {
    RU: {
      preview: 'Превью',
      repo: 'Репозиторий',
      techs: 'Использованные технологии'
    },
    EN: {
      preview: 'Preview',
      repo: 'GitHub',
      techs: 'Used technologies/libraries'
    }
  }

  const currentDictionary = getDictionary(lang, localDictionary)

  return (
    <div className='projectCard'>
      <h3 className='projectCard__title'>{data.name}</h3>
      <p>{data.description}</p>
      <ul className='projectCard__techs'>
        <h3 className='projectCard__techs--title'>{currentDictionary.techs}</h3>
        {data.techs.map((tech, index) => <li key={index} className='projectCard__techs--item'>-{tech}</li>)}
      </ul>
      <div className='projectCard__links'>
        <a href={data.preview} target='_blank' className='projectCard__link' tabIndex={ data.id + additionalTabIndex }>
          <span className="projectCard__link--gradient" />
          <span className="projectCard__link--text">{currentDictionary.preview}</span>
        </a>
        <a href={data.repo} target='_blank' className='projectCard__link' tabIndex={ data.id + additionalTabIndex }>
          <span className="projectCard__link--gradient" />
          <span className="projectCard__link--text">{currentDictionary.repo}</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
