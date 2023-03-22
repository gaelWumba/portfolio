import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
import { useLocomotiveScroll } from 'react-locomotive-scroll';


function Me() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const { scroll } = useLocomotiveScroll();
    const ref = useRef(null);
    const about = useRef(null);

    useEffect(() => {
        if(scroll) {
            const element = scroll?.el;
            scroll.on('scroll', ScrollTrigger.update);
      
            ScrollTrigger.scrollerProxy(element, {
              scrollTop(value){
                return arguments.length 
                  ? scroll.scrollTo(value, { duration: 0, disableLerp: true }) 
                  : scroll.scroll.instance.scroll.y;
              },
      
              getBoundingClientRect() {
                return {
                  top: 0, 
                  left: 0, 
                  width: window.innerWidth, 
                  height: window.innerHeight
                };
              },
      
              pinType: element.style.transform 
                ? 'transform' 
                : 'fixed'
            })
        }
      
        ScrollTrigger.addEventListener('refresh', () => scroll?.update());
        ScrollTrigger.refresh();

        let jeSuisDev = new SplitText('.aboutMe-jeDev', {type: 'chars'});
        let devChars = jeSuisDev.chars;
        gsap.to(devChars, {
            y: -100,
            duration: 1,
            scrollTrigger: {
                scroller: scroll?.el,
                trigger: about.current,
                start: 'top 80%',
                toggleActions: 'restart none none reverse',
            }
        })

    }, [scroll]);
    

    return (
        <section data-scroll-section id='about' className='me__main--container' ref={ref}>

            <h2 className='gael'>Gael</h2>
            <h3 className='myMail'>
                <a onClick={() => window.location = 'mailto:g.wumbabuatu@gmail.com'}>g.wumbabuatu@gmail.com</a>
            </h3>
            <h2 className='wumba'>WUMBA</h2>
            <h2 className='buatu'>BUATU</h2>
            
            <div className='myLinks'>
                <a target={"_blank"} href="https://www.linkedin.com/in/gael-wumba-buatu">
                    linkedin
                </a>
                <a target="_blank" href="https://github.com/gaelWumba">
                    github
                </a>
            </div>

            <p className='moi'>
                Je suis Gaël, développeur frontend et mobile
                situé à Paris, France. <br /> J'ai une passion pour la création
                d'expériences utilisateur intuitives,
                dynamiques et captivantes.
            </p>


            {/* <h4 className='post'
                data-scroll 
                data-scroll-speed="-40" 
                data-scroll-direction="horizontal"
            >
                Disponible pour un poste en
            </h4>
            <h4 className='alten'
                data-scroll 
                data-scroll-speed="30" 
                data-scroll-direction="horizontal"
            >
                ALTERNANCE
            </h4> */}
            
        </section>
    )
}

export default Me