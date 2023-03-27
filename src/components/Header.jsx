import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    // const tl  = gsap.timeline()
    //   tl.to(".nav", {
    //     y: 100,
    //     delay: 6.5,
    //     duration: 1.5,
    //   })
  })

  return (
    <div className="nav">
      <div className="myNavLinks">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gael-wumba-buatu"
        >
              linkedin
        </a>
        <a onClick={() => window.location = 'mailto:g.wumbabuatu@gmail.com'}>
          email
        </a>
        
        <a target="_blank" href="https://github.com/gaelWumba">
          github
        </a>
      </div>
    </div>
  );
}
