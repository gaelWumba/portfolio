import React from 'react'

export default function Projects3() {

    return (
        <section data-scroll-section className='projects3__main--container'>
            <div 
                data-scroll 
                data-scroll-speed="1" 
                data-scroll-direction="horizontal" 
                className="slideContent"
            >
                <div className='slideInfo'>
                    <span>03</span>
                    <p>
                        React js <br />
                        MongoDB <br />
                        Socket.io <br />
                        Bootstrap <br/>
                        Figma
                    </p>
                </div>
                <div className="slideProjet">
                    <h1>SLIDE</h1>
                    <a target={"_blank"} href="https://github.com/gaelWumba/slide">
                        <h6>
                            <span>SLIDE</span> 
                                Voir le Github du project
                        </h6>
                    </a>
                </div>
                <img src="./projets/slide.png" alt="" />
            </div>
        </section>
    )
}