import React, { useEffect } from 'react'

export default function Projects() {
    useEffect(() => {
        
    }, []);

    return (
        <section data-scroll-section id='projects' className='projects__main--container'>
            <div className='mingaPrt'
                data-scroll 
                data-scroll-speed="1" 
                data-scroll-direction="horizontal" 
            >
                <p className='mingaInfo'>
                    <span>01</span>
                    React js <br />
                    Symfony <br />
                    API Platform <br />
                    Tailwind CSS <br />
                    Figma
                </p>
                
                <div className='mingaPro'>
                    <div className="title">
                        <h1>MINGA</h1>
                        <a target={"_blank"} href="https://github.com/gaelWumba/minga">
                            <h6>
                                <span>Minga</span> 
                                    Voir le Github du project
                            </h6>
                        </a>

                    </div>                
                </div>
                <img src="./projets/minga.png" alt="" />
            </div>
            
            
        </section>
    )
}