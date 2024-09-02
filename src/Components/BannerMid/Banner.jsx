import React from 'react'
import { Container } from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
import "./banner.css"


function Banner() {
  return (
    <section id='banner'>
     <Container>
     <div className="inner_banner">
        <h1 className='animate__animated animate__bounceInDown  animate__fast	800ms '>Hey, I'm Mahi Hossain</h1>
      
      </div>
      <div className="pragh">
      <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: '700',display: 'inline' }}>
      A Result-Oriented{' '}
        <span style={{ color: '#FEBB04', fontWeight: '500' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={1000}
            
           
          />
        </span>
      </h1>
      </div>

      <div className="project">
        <button>
        <a href='#'>Project</a>
        </button>
      </div>

     <div className="scroll">
     <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
     </div>
 
      
     </Container>

    </section>
  )
}

export default Banner
