import React from 'react'
import "./contact.css"
import { Container } from 'react-bootstrap'

function Contact() {
  return (
<section id='contact'>
<div class="login-box">
  <h2>Get In Touch</h2>
 <Container>
 <form className='row'>
    <div class="user-box col-lg-6">
      <input type="text" name="" required=""/>
      <label>Name</label>
    </div>
    <div class="user-box col-lg-6">
      <input type="email" name="" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box col-lg-6">
      <input type="text" name="" required=""/>
      <label>Company Name</label>
    </div>
    <div class="user-box col-lg-6">
      <input type="text" name="" required=""/>
      <label>Contact Number</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Message</label>
    </div>
   <a href='#'>
   <button class="glow-on-hover" type="button">Sumbit</button>
   </a>
  </form>
 </Container>
</div>
</section>
  )
}

export default Contact
