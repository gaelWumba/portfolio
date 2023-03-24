import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);


  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const {clientX, clientY } = e;

      const innerMouseX = clientX - innerCursorRef.current.clientWidth / 2;
      const innerMouseY = clientY - innerCursorRef.current.clientHeight / 2;

      innerCursorRef.current.style.transform = `translate3d(${innerMouseX}px, ${innerMouseY}px, 0)`;

      const outerMouseX = clientX - outerCursorRef.current.clientWidth / 2;
      const outerMouseY = clientY - outerCursorRef.current.clientHeight / 2;

      outerCursorRef.current.style.transform = `translate3d(${outerMouseX}px, ${outerMouseY}px, 0)`;
      
      
    })
    
  }, [])

  return (
    <div>
      <div className="cursor outer-cursor" ref={outerCursorRef}/>
      <div className="cursor inner-cursor" ref={innerCursorRef}/>
    </div>
    
  )
}
