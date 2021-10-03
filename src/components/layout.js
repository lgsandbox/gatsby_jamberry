import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Card from "./card"
import { ThemeProvider } from 'styled-components'
import { Container } from '../components/styles/Container.styled'
import content from "./content"


const theme = {
  colors: {
    header:'#e8ffe8',
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

  
  
  

  return (
 
    <React.Fragment>
      
      <ThemeProvider theme = {theme}>

          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div>
           
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
