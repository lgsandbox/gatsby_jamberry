import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';




export default function Animation() {
    
    useEffect(() => {
        setTimeout(() => {
          anime({
            targets: '#arrow',
            translateY: {
              value: 20,
              direction: 'normal',
            
            },
    
            easing: 'easeInOutSine',
            opacity: 1,
            duration: 1900
    
          });
        }, 400);
        }
    )
        return(<div></div>)
    };