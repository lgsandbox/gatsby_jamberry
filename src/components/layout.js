import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Card from "./card"
import { ThemeProvider } from 'styled-components'
import { Container, ArrowContainer } from '../components/styles/Container.styled'
import content from "./content"
import { StaticImage } from "gatsby-plugin-image"

import anime from 'animejs/lib/anime.es.js';




const theme = {
  colors: {
    header:'#f2fff2',
    body: '#fff',
    footer: '#003333',
    buttonbg: '#fff',
    buttoncolor: '#333',
    },
  spacing: {
    margin: '10px',
    width: '80%',
    },
  mobile: '768px',
  }



const Layout = ({ children }) => {

  
const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)


  useEffect(() => {


    setTimeout(() => {
      anime({
        targets: '#point',
        direction: 'alternate',
        scale: 1,
        translateY: 15,
        opacity:1,
        duration: 2500,
        loop: true,
        easing: 'easeInOutSine',

      });
    }, 2000);


    }
)
  
return (
 
    <React.Fragment>
      
      <ThemeProvider theme = {theme}>

          <Header id="header" siteTitle={data.site.siteMetadata.title} />
            
    
            <ArrowContainer id="point">
                 <div> 
                <StaticImage 
              src="../images/arrow2.svg"
              alt="scroll to view arrow!" 
              id="arrow" 
              placeholder="blurred"
              loading="eager"
              width={26}
              height={26} /> 
                </div>
            </ArrowContainer>

            <div>
            <main>{children}</main>
              <Container>
                {content.map((item, index) =>(
                 <Card key={index} item={item}/>
                ))}

              </Container>

              <Footer></Footer>
            </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
