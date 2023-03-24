import React, { useEffect, useRef } from 'react'

function Me() {
    

    return (
        <section data-scroll-section id='about' className='me__main--container'>

            <h2 className='gael'>Gaël</h2>
            <h3 className='myMail'>
                <a onClick={() => window.location = 'mailto:g.wumbabuatu@gmail.com'}>g.wumbabuatu@gmail.com</a>
            </h3>
            <h2 className='wumba'>WUMBA</h2>
            <h2 className='buatu'>BUATU</h2>
            
            <div className='myLinks'>
                <a target={"_blank"} href="https://www.linkedin.com/in/gael-wumba-buatu" className='linkedin'>
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