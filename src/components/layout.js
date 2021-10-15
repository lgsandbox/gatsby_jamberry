import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Card from "./card"
import { ThemeProvider } from 'styled-components'
import { Container } from '../components/styles/Container.styled'
import content from "./content"
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
        targets: '#slideRight',
        translateX: 250,
        duration: 3000
      });
    }, 1000);
  })
  
  

  return (
 
    <React.Fragment>
      
      <ThemeProvider theme = {theme}>

          <Header siteTitle={data.site.siteMetadata.title} />

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
