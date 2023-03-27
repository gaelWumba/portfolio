import React from "react";

export default function Footer() {
  return (
    <section data-scroll-section id="footer" className="footer--container">
      <div className="travailX">
        <p
          className="workTop"
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
        >
          Travail&nbsp;&nbsp;일하다&nbsp;&nbsp;
        </p>
        <div className="letsWork to-bottom">
          <div className="dialog">
            êtes vous à <br />
            l'écoute du marché?
          </div>
          <div className="myImg">
            <img src="./about/herAva.png" alt="" className="myAvatar"/>
            <img src="./about/image.png" alt="" className="myImg"/>
          </div>

          <div className="dialog2">
            je suis à la recherche<br/> 
            d'un contrat en alternance!
          </div>
          
        </div>
        <p
          className="workBottom"
          data-scroll
          data-scroll-speed="-5"
          data-scroll-direction="horizontal"
        >
          Mosala&nbsp;&nbsp;&nbsp;Work&nbsp;&nbsp;
        </p>

      </div>
    </section>
  );
}
