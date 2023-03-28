import React, { useEffect } from 'react'
import {gsap} from 'gsap'

function Home() {
  useEffect(() => {
    const tl  = gsap.timeline()
      tl.to(".moderne, .creative, .design", {
        opacity: 2,
        delay: 0.9,
        duration: 10,
      })
  })

  return (
    <section data-scroll-section id='home' className='home__main--container'>
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
          className='creative crea'
        >
          Creative
        </h1>
        <h2 
          data-scroll 
          data-scroll-speed="-2" 
          data-scroll-direction="horizontal" 
          className='design'
        >
          developer
        </h2>      
    </section>
  )
}

export default Home