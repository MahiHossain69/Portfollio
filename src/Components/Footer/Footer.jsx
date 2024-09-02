import React from 'react'
import { FaLinkedin } from "react-icons/fa6";

import { FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import "./footer.css"


function Footer() {
  return (
   <section id='footers'>
  <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <FaFacebookSquare />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <FaTwitterSquare />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <FaLinkedin />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <AiFillInstagram />
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>© Copyright 2024 . Made by Mahi Hossain</p>
  </footer>
   


   </section>
  )
}

export default Footer
