import { timeline } from "motion";
import React, { useEffect, useRef } from "react";


function getSectionHeight (element) {
  const { height } = element.getBoundingClientRect();
  const {childElementCount} = element;
  
  return height / childElementCount;
}
export default function Loading() {
  const countRef = useRef(null);
  const countRef2 = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    if(countRef.current && countRef2.current) {
      const transformAmount = getSectionHeight(countRef.current)

      const sequence = new Array(3).fill('').flatMap((_, index ) => [
          [countRef.current, {y: `-${transformAmount * (index + 1)}px`}],
          [countRef2.current, {y: `-${transformAmount * (index + 1)}px`}, {at: "-1.85"}],
      ])

      timeline(sequence, {
        defaultOptions: {
          easing: [0.77, 0, 0.175, 1], 
          duration: 2,
        }
      })

    }

    const sequences = [
      [countRef.current, {opacity: 0}, {at: "<"}],
      [countRef2.current, {opacity: 0}, {at: "<"}],
      [loaderRef.current, {y: '-100vh'}, {at: "-0.5"}]

    ];
    timeline(sequences, {
      defaultOptions: {
        easing: [0.77, 0, 0.175, 1], 
        duration: 0.6,
        delay: 6.5,
      }
    });
  })

  return (
    <div className="loader-container" ref={loaderRef}>
      <div className="counter-container">
        <ul className="counter-list" ref={countRef}>
          <li>
            <h3>2</h3>
          </li>
          <li>
            <h3>4</h3>
          </li>
          <li>
            <h3>6</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
        </ul>
      </div>

      <div className="counter-container">
        <ul className="counter-list" ref={countRef2}>
          <li>
            <h3>3</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
          <li>
            <h3>8</h3>
          </li>
          <li>
            <h3>9</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
