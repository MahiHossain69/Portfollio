import React from 'react'
import Project1 from "../../assets/project1.png"
import Project2 from "../../assets/project2.png"
import Project3 from "../../assets/project3.png"
import Project4 from "../../assets/project4.png"
import Project5 from "../../assets/project5.png"
import Project6 from "../../assets/project6.png"
import { Container } from 'react-bootstrap'
import "./project.css"

function Project() {
  return (
<section id='project'>
<Container>
    <div className="project_inner">
        <h1>Projects</h1>
    </div>
<div className="cardd">
<article class="card">
  <img
    class="card__background"
   src={Project1}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Project 1</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button"><a href='#'>Read more</a></button>
  </div>
</article>





<article class="card">
  <img
    class="card__background"
   src={Project2}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Project 2</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button"><a href='#'>Read more</a></button>
  </div>
</article>



<article class="card">
  <img
    class="card__background"
   src={Project3}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Project 3</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button"><a href='#'>Read more</a></button>
  </div>
</article>






<article class="card">
  <img
    class="card__background"
   src={Project4}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Project 4</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button"><a href='#'>Read more</a></button>
  </div>
</article>





<article class="card">
  <img
    class="card__background"
   src={Project5}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Project 5</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button"><a href='#'>Read more</a></button>
  </div>
</article>

<article class="card">
  <img
    class="card__background"
   src={Project6}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Project 6</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button"><a href='#'>Read more</a></button>
  </div>
</article>

</div>
</Container>
</section>
  )
}

export default Project
