import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// styles:
import { ThemeProvider } from 'styled-components'
import { Container } from '../components/styles/Container.styled'

// layout:
import Header from "./header"
import Footer from "./footer"
import Card from "./card"
import content from "./content"

// layout animation:
import anime from 'animejs/lib/anime.es.js';


// props
const theme = {
  colors: {
    header:'#f5fcfc',
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

// graphql metadata schema   
const data = useStaticQuery(graphql`

      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }}}

`)

// state setting y position
const [scrollPosition, setScrollPosition] = useState(0);

const handleScroll = () => { const position = window.pageYOffset; setScrollPosition(position); };
 
// move to function component




useEffect(() => { window.addEventListener('scroll', handleScroll, { passive: true });

return () => { window.removeEventListener('scroll', handleScroll);};}, []);

console.log(scrollPosition);


//jsx media size check, for animation and logic
if(window.screen.availWidth >= 768){ console.log("it desktop");} 
else { console.log("it phone"); }


useEffect(() => { if(scrollPosition >= 80 & window.screen.availWidth >= 768) {
  
              anime({
                
                targets: '#reveal',
                opacity:1,
                duration: 500,
                easing: 'linear',

              });

            }}, []);

// layout animations



return (

    <React.Fragment>   
      <ThemeProvider theme = {theme}>
          <Header id="header" siteTitle={data.site.siteMetadata.title} />
            <div>
              <main>{children}</main>
                <Container>
                  {content.map((item, index) =>(
                  <Card key={index} item={item}/>
                  ))}
                </Container>
                <Container>
               
                  <Card/>
            
                </Container>
              <Footer/>
            </div>
      </ThemeProvider>
    </React.Fragment>
 
 )}

Layout.propTypes = { children: PropTypes.node.isRequired, }

export default Layout
