import React from 'react'

export default function Projects2() {

    return (
        <section data-scroll-section className='projects2__main--container'>
            <div 
                data-scroll 
                data-scroll-speed="-1" 
                data-scroll-direction="horizontal" 
                className="coolifyContent"
            >
                <img src="./projets/coolify.png" alt="" />
                <div className="coolifyProjet">
                    <h1>COOLIFY</h1>
                    <a target={"_blank"} href="https://github.com/gaelWumba/coolify">
                        <h6>
                            <span>COOLIFY</span> 
                                Voir le Github du project
                        </h6>
                    </a>
                </div>
                <div className='coolifyInfo'>
                    <span>02</span>
                    <p>
                        Next js <br />
                        MongoDB <br />
                        Socket.io <br />
                        Bootstrap <br/>
                        Figma
                    </p>
                </div>
            </div>
            
            
        </section>
    )
}