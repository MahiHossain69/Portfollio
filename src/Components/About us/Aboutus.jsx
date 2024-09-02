import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./aboutus.css"


function Aboutus() {
  return (
<section id='about'>
<Container>
    <div className="about_inner">
        <h1>About Me</h1>
        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        <h2>Get to know me !</h2>
        <div className="get_know_inner">
          <p>
          I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
          </p>
          <p>I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href='https://www.linkedin.com/' target='block' className='link'>Linkedin</a> and <a href='https://www.instagram.com/' className='link' target='block' >Instagram</a> where I post useful content related to Web Development and Programming</p>
          <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
        </div>
        <button className="glowing-button" >Contact</button>
       
    </div>
     <div className="skill">
          <h1>My Skills</h1>
          <div className="skills">HTML</div>
          <div className="skills_one">CSS</div>
          <div className="skills_two">JavaScript</div>
          <div className="skills_three">React</div>
          <div className="skills_four">Responsive Design</div>
          <div className="skills_five">Github</div>
          <div className="connect">
            <h2>  Connect With Me</h2>
            <div className="icon">
            <div className="facebook">
           <a href='https://www.facebook.com/' target='block'> <FaFacebookSquare /></a>
            </div>
           <div className="twitter">
       <a href='https://x.com/' target='block'><FaTwitter /></a>
           </div>
         <div className="linkdin">
         <a href='https://www.linkedin.com/' target='block'><FaLinkedin /></a>
         </div>
          <div className="github">
         <a href='https://github.com/' target='block'> <FaGithub /></a>
          </div>



            </div>
          </div>
        </div>
</Container>
</section>

  )
}

export default Aboutus
