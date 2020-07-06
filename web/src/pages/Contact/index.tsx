import React from 'react';
import './styles.css';

const Contact =()=>{
  return(

<div className="contact-section">

  <h1>Contact Us</h1>

  <form className="contact-form" action="index.html" method="post">
    <input type="text" className="contact-form-text" placeholder="Seu nome"/>
    <input type="email" className="contact-form-text" placeholder="Seu email"/>
    <input type="text" className="contact-form-text" placeholder="Seu phone"/>
    <textarea className="contact-form-text" placeholder="Sua mensagem"></textarea>
    <input type="submit" className="contact-form-btn" value="Enviar"/>
  </form>
</div>





    )
}

export default Contact;