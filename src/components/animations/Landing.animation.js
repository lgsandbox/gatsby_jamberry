import anime from 'animejs/lib/anime.es.js';
import { useState, useEffect } from "react"

export default function useLogoAnimation() {
    

    
  const [hover, setHover] = useState(false);

    function handleHoverStuff(stuff) {
      setHover(stuff.hover);

    }



    useEffect(() => {
  
    anime({
      targets:'#leftGreenPoly2',
      d: [
  
        { value: [
          'M2.7035 53.8317L2.8818 27.8978L56.844 27.5668L2.7035 53.8317Z',
          'M2.2 47.6017L2.18 3.20L56.44 30.40L5.200 42.8317Z']
        },
        { value: 'M2.7035 53.8317L2.8818 27.8978L56.844 27.5668L2.7035 53.8317Z' }
  
      ],
      easing: 'linear',
      direction: 'alternate',
      duration: 5000,
      loop: true,
  
    });
  });
  return hover;

    }


// fades the header components using opacity 
export  function HeaderAnimation() {   

// fades right
setTimeout(() => {
            anime({
            targets: '#fadeRight',
            translateX: {
              value: 50,
              direction: 'normal',
            
            },

            easing: 'easeInOutSine',
            opacity: 1,
            duration: 1400

           });
    }, 400);

setTimeout(() => {
          anime({
            targets: '#logo',

            easing: 'easeInOutSine',
            opacity: 1,
            duration: 1000

          });
    }, 20);


//fades left
setTimeout(() => {
          anime({
            targets: '#navButton',

            easing: 'easeInOutSine',
            opacity: 1,
            duration: 1400

          });
        }, 400);

setTimeout(() => {
          anime({
            targets: '#headerImage',

            easing: 'easeInOutSine',
            opacity: 1,
            duration: 1400

          });
        }, 400);

        // fades lower components in view
        let cardDown = setTimeout(() => {
          anime({
            targets: '#cardDown',
            translateY: 35,
            easing: 'easeInOutSine',
            opacity: 1,
            duration: 1900

          });
        }, 400);

    }





