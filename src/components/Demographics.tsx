import React, { useState, useEffect, useRef } from 'react';
import './Demographics.css'; // Make sure to create this CSS file for styles

const demographics = [
  { value: 100, title: 'CORPORATES' },
  { value: 50, title: 'EXHIBITORS' },
  { value: 12, title: 'SPEAKERS' },
  { value: 50, title: 'AWARDEES' },
  { value: 1005, title: 'NOT FOR PROFITS' },
  { value: 121300, title: 'SITE VISITORS' },
  
];

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M+';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k+'; 
  }
  else if (num <= 100) {
    return (num) + '+'; 
  }
  return num;
};

export const Demographics = () => {
    const [counters, setCounters] = useState(demographics.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false); // To prevent multiple animations
    const containerRef = useRef(null); // Reference to the component container
  

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            // Check if the component is intersecting and if the animation hasn't run yet
            if (entry.isIntersecting && !hasAnimated) {
              startAnimation();
              setHasAnimated(true); // Ensure the animation runs only once
              observer.unobserve(entry.target); // Stop observing after animation starts
            }
          },
          {
            threshold: 0.1, // Trigger when at least 10% of the component is visible
          }
        );
    
        if (containerRef.current) {
          observer.observe(containerRef.current);
        }
    
        // Clean up the observer on unmount
        return () => {
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        };
      }, [hasAnimated]);


      const startAnimation = () => {
        const increment = () => {
          setCounters((prev) =>
            prev.map((value, index) =>
              value < demographics[index].value
                ? value + Math.ceil(demographics[index].value / 200)
                : demographics[index].value
            )
          );
        };
    
        const timer = setInterval(increment, 20);
    
        // Stop the interval after the animation is complete
        setTimeout(() => {
          clearInterval(timer);
        }, 4000); // Adjust the duration if needed
      };
    
    

      return (
        <div className="demographics-container" ref={containerRef}>
          {demographics.map((item, index) => (
            <div key={index} className="counting-number-div">
              <div className="percent">
                <p>
                  <span className="percent-value">
                    {formatNumber(counters[index])}
                  </span>
                </p>
              </div>
              <h3 className="title">{item.title}</h3>
            </div>
          ))}
        </div>
      );
    };
    
