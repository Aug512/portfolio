import React from 'react'

export default function ContactLink ({ title, href }) {
  return (
    <a href={href}
      target='_blank'
      className='contacts__link'
      tabIndex='2'
    >
      <span className="contacts__link--gradient" />
      <span className="contacts__link--text">{title}</span>
    </a>
  )
}
