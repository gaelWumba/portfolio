import React, { useEffect } from 'react'
import {gsap} from 'gsap'

function Home() {
  useEffect(() => {
    const tl  = gsap.timeline()
      tl.to(".moderne, .creative, .design", {
        opacity: 2,
        delay: 8,
        duration: 8,
      })
  })

  return (
    <section data-scroll-section id='home' className='home__main--container'>
      <div className='home__content'>
        <h3  
          data-scroll 
          data-scroll-speed="2"
          className='moderne'
        >
          <span>GAËL</span> 
          <span>WUMBA</span> 
          <span>BUATU</span> 
        </h3>
        
        <h1 
          data-scroll 
          data-scroll-speed="2" 
          data-scroll-direction="horizontal" 
          className='creative'
        >
          <span className='crea'>Creative</span>
        </h1>
        <h2 
          data-scroll 
          data-scroll-speed="-2" 
          data-scroll-direction="horizontal" 
          className='design'
        >
          developer
        </h2>
      </div>
      
    </section>
  )
}

export default Home