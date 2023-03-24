import React from 'react'

export default function Projects3() {

    return (
        <section data-scroll-section className='projects3__main--container'>
            <div className='slidePrt'
                data-scroll 
                data-scroll-speed="1" 
                data-scroll-direction="horizontal" 
            >
                <p className='slideInfo'>
                    <span>03</span>
                    React js <br />
                    MongoDB <br />
                    Socket.io <br />
                    Bootstrap <br />
                </p>
                
                <div className='slidePro'>
                    <div className="title">
                        <h1>SLIDE</h1>
                        <a target={'_blank'} href="https://github.com/gaelWumba/slide">
                            <h6>
                                <span>Slide</span> 
                                    Voir le Github du project
                            </h6>
                        </a>
                    </div>                
                </div>
                <img src="./projets/slide.png" alt="" />
            </div>
        </section>
    )
}