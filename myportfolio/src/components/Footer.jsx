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
          <h1>
            <span className="lets">Let's work</span>
            <span className="boulot">Travaillons</span>
          </h1>
          {/* <div className="myHead" /> */}
          <div className="myImg">
            <img src="./about/myAvatar.png" alt="" className="myAvatar"/>
            <img src="./about/image.png" alt="" className="myImg"/>
          </div>

          <h4 className="posteR">
            <span className="dispo">disponible pour un contrat en</span>
            <span className="altern">Alternance</span>
          </h4>
          
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
