import React from 'react'

export default function About({ userData, lang }) {

  const getDictionary = (lang, dict) => {
    return (lang === 'RU') ? dict.RU : dict.EN
  }

  const localDictionary = {
    RU: {
      github: 'Профиль GitHub',
    },
    EN: {
      github: 'GitHub Profile',
    }
  }

  const currentDictionary = getDictionary(lang, localDictionary)

  return (
    <div className='about'>
      <h2 className='about__name'>{userData.name}</h2>
      <a className='about__github'
        href={userData.githubProfile}
        target='_blank'
      >
        <span className="about__github--gradient" />
        <span className="about__github--text">{currentDictionary.github}</span>
      </a>
      <div className='about__bio'>
        {userData.bio.map(paragraph => <p className='about__bio--paragraph'>{paragraph}</p>)}
      </div>
    </div>
  )
}