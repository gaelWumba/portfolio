import React from 'react'

export default function Workspace() {
  return (
    <section data-scroll-section className='workspace--container'>
        <div className='space'
                data-scroll 
                data-scroll-speed="-8" 
                data-scroll-direction="horizontal" 
            >
                <div className='workSpace'>
                    WORK SPACE
                </div>
                <div className='workSpace-clone'>
                    WORK SPACE
                </div>
          </div>
    </section>
  )
}
