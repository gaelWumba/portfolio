import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Disc } from 'react-feather';

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    
  }, []);

  return (
    <section data-scroll-section id='home' className='home__main--container' ref={ref}>
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