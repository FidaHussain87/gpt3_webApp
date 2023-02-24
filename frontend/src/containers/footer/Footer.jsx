import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links__logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Obere Kanalstrase 10,90429, Nuremberg, Germany</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Get in Touch</h4>
          <p>Obere Kanalstrase 10,90429, Nuremberg, Germany</p>
          <p>+4915217869619</p>
          <p>info.admin@opensource.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p> ©️ 2023 OpenSource. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
