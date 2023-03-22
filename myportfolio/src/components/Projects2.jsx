import React, { useEffect } from 'react'

export default function Projects2() {
    useEffect(() => {
        
    }, []);

    return (
        <section data-scroll-section className='projects2__main--container'>
            <div className='coolifyPrt'>
                <img src="./projets/coolify.png" alt="" />

                <p className='coolifyInfo'>
                    <span>02</span>
                    React js <br />
                    Docker <br />
                    CSS
                </p>
                
                <div className='coolifyPro'>
                    <div className="title">
                        <h1>COOLIFY</h1>
                        <a target={'_blank'} href="https://github.com/gaelWumba/SONO">
                            <h6>
                                <span>Minga</span> 
                                    Voir le Github du project
                            </h6>
                        </a>
                    </div>                
                </div>
            </div>

            {/* <div className='slidePrt'
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
                        <h6>
                            <span>Slide</span> 
                            <a href="">
                                Voir le Github du project
                            </a>
                        </h6>
                    </div>                
                </div>
                <img src="./projets/slide.png" alt="" />
            </div> */}
            
            
        </section>
    )
}