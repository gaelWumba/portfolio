import React from 'react'

export default function Projects() {

    return (
        <section data-scroll-section id='projects' className='projects__main--container'>

            <div 
                data-scroll 
                data-scroll-speed="1" 
                data-scroll-direction="horizontal" 
                className="mingaContent"
            >
                <div className='mingaInfo'>
                    <span>01</span>
                    <p>
                        React js <br />
                        Symfony <br />
                        API Platform <br />
                        Tailwind CSS <br />
                        Figma
                    </p>
                </div>
                <div className="mingaProjet">
                    <h1>MINGA</h1>
                    <a target={"_blank"} href="https://github.com/gaelWumba/minga">
                        <h6>
                            <span>Minga</span> 
                                Voir le Github du project
                        </h6>
                    </a>
                </div>
                <img src="./projets/minga.png" alt="" />
            </div>
            
            
        </section>
    )
}