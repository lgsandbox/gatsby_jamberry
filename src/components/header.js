import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { Container, HeaderImageContainer } from '../components/styles/Container.styled'
import { StyledHeader, Nav } from '../components/styles/Header.styled'
import { StaticImage } from "gatsby-plugin-image"
import { Button, SecondButton } from './styles/Button.styled'
import { Flex } from '../components/styles/Flex.styled'
import anime from 'animejs/lib/anime.es.js';


  // Similar to componentDidMount and componentDidUpdate:


const Header = ({ siteTitle }) => (

  


  <StyledHeader>
    <header>
      <Container>
        <Nav >
          
        <StaticImage 
          src="../images/weblogo2.png"
          alt="logo image" 
          />
        <Button
          onClick={() => anime({
            targets: 'button',
            opacity: 0,
            scale: 2,
            duration: 1000,
    
            easing: 'linear',
            direction: 'alternate'
          })}>
          Get Quote  → </Button>

        </Nav>
        <Flex>
          <div>
            <h1>Web Solutions To Help Your Business Grow</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            Lorem ipsum.
            </p>
            <SecondButton> Contact For Free Consultation</SecondButton>
          </div>
          <HeaderImageContainer>
          <StaticImage 
          src="../images/illustration-mockups.svg"
          alt="header image" /> 
          </HeaderImageContainer>
        </Flex>
      </Container>
    </header>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
