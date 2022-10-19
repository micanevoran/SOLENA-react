import React from 'react'
import mail from '../img/mail.svg';
import whap from '../img/whap.svg';
import instagram from '../img/instagram.svg';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';

const Footer = () => {
  return (
    <footer className='footer'>
        <a href="mailto:enevoran@gmail.com" target="_blank" rel="noreferrer">
            <img src={mail} alt="ícono de email" className='footerIcon'/>
        </a>
        <a href="https://wa.me/+5493764534762" target="_blank" rel="noreferrer">
            <img src={whap} alt="ícono de Whatsapp" className='footerIcon'/>
        </a>
        <a href="https://www.instagram.com/solena.sas/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="ícono de Instagram" className='footerIcon'/>
        </a>
        <a href="https://www.facebook.com/SolenaSAS/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="ícono de Facebook" className='footerIcon'/>
        </a>
        <a href="https://www.linkedin.com/in/eduardo-nevoran-a5b38257/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="ícono de Linkedin" className='footerIcon'/>
        </a>
    </footer>
  )
}

export default Footer