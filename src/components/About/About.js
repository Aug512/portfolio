import React from 'react'
import ContactLink from '../ContactLink/ContactLink'

export default function About({ userData, lang }) {

  const getDictionary = (lang, dict) => {
    return (lang === 'RU') ? dict.RU : dict.EN
  }

  const localDictionary = {
    RU: {
      github: 'Профиль GitHub',
      contacts: 'Контакты'
    },
    EN: {
      github: 'GitHub Profile',
      contacts: 'Contacts'
    }
  }

  const currentDictionary = getDictionary(lang, localDictionary)

  return (
    <div className='about'>
      <h2 className='about__name'>{userData.name}</h2>
      <a className='about__github'
        href={userData.githubProfile}
        target='_blank'
        tabIndex='1'
      >
        <span className="about__github--gradient" />
        <span className="about__github--text">{currentDictionary.github}</span>
      </a>
      <div className='about__contacts'>
        <h3 className='contacts__title'>{currentDictionary.contacts}:</h3>

        <ContactLink title={'+7 (965) 015-78-20'} href={`tel:+${userData.tel}`} />
        <ContactLink title={'Telegram'} href={`https://tele.gs/${userData.nickname}`} />
        <ContactLink title={'WhatsApp'} href={`https://wa.me/${userData.tel}`} />
        <ContactLink title={'dmitriy.esko@gmail.com'} href='mailto:dmitriy.esko@gmail.com' />

      </div>
    </div>
  )
}