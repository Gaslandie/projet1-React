import React from 'react'
import womanPicture from '../images/woman-pic.jpg'

export default function Header() {
  return (
    <header className='header'>
        <img src={womanPicture} alt="" />
        <h1>Laura Smith</h1>
        <h3 className='job-title'>Front-End Developper</h3>
        <h3 className='entreprise'>Gaslandie</h3>
        <div className='buttons'>
            <button className='btn-email'><i class="fa-solid fa-envelope email-logo"></i><span className='email'>Email</span></button>
            <button className='btn-linkedin'><i class="fa-brands fa-linkedin linkedin-logo"></i><span className='linkedin'>Linkedin</span></button>
        </div>
    </header>
  )
}
