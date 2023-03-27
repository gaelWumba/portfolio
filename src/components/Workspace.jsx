import React from 'react'

export default function Workspace() {
  return (
    <section data-scroll-section className='workspace--container'>
      <div className="spaces">
          <h2 
            data-scroll 
            data-scroll-speed="-10" 
            data-scroll-direction="horizontal" 
            className='workSpace'
          >
            WORK SPACE
          </h2>
          <h2
            data-scroll 
            data-scroll-speed="-10" 
            data-scroll-direction="horizontal"  
            className='workSpace-clone'
          >
            WORK SPACE
          </h2>
      </div>   
    </section>
  )
}
