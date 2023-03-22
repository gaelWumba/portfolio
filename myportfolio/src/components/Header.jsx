import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  return (
    <nav className="nav">

      <ul className="myHeaderLinks">
        <li>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/gael-wumba-buatu"
          >
            linkedin
          </a>
        </li>
        <li>
          <a onClick={() => window.location = 'mailto:g.wumbabuatu@gmail.com'}>contact</a>
        </li>
        <li>
          <a target={"_blank"} href="https://github.com/gaelWumba">
            github
          </a>
        </li>
      </ul>
    </nav>
  );
}
