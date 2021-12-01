import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// styles:
import { Container, HeaderImageContainer } from '../components/styles/Container.styled'
import { StyledHeader, Nav, Logo, StyledCanvas } from '../components/styles/Header.styled'
import { Button, SecondButton } from './styles/Button.styled'
import { Flex } from '../components/styles/Flex.styled'
import { Fade } from '../components/styles/Fade.styled'

// svg:
import BigDAOLogo from "../components/svg/assets/bigdaologo.svg"
import InspireHeader from "../components/svg/assets/inspireheader.svg"

// components:
import Modal from './modal.js'

// animation:
import useLogoAnimation, { HeaderAnimation } from "./animations/Landing.animation"
import Box from "./3d"
import { Canvas, useFrame } from '@react-three/fiber'
import anime from 'animejs/lib/anime.es.js';

const Header = ({ siteTitle }) => {

  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  const openModal = () => { setShowModal(prev => !prev) };




  HeaderAnimation();

  return (

    <StyledHeader id="theme">
      <header>
        <Container>
          <Nav >  
            <Link to="/">
            <Logo onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)} id="logo"> 
     
              <BigDAOLogo id="logo" />
            </Logo>
            </Link>
            <Link to="/quote">
            <Button id="navButton">
            Get Quote Now → </Button> </Link>
          </Nav>
          <Flex>
            




            <Fade id="fadeRight">
            <StyledCanvas>
              <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
 
              <Box position={[1, 1, 1]} />             
              <Box position={[2, 2, 2]} />  


            </Canvas>
            </StyledCanvas>

              <h1>The Future Of Web Development</h1>
              {window.screen.availWidth >= 768 ? 
                   <p>Bring your next dApp UI/UX experience to life with BigDAO</p> 
  : true }

              {window.screen.availWidth <= 768 ? 
                 <InspireHeader width="100%" height="50%"/> 
  : false }

  <SecondButton onClick={
              openModal}> Contact For Free Consultation</SecondButton> 
            
            
            </Fade>
            <HeaderImageContainer id="headerImage">
              {window.screen.availWidth >= 768 ? 
              <InspireHeader width="100%" height="100%"/>
  : true }  </HeaderImageContainer>

          </Flex>
        </Container>
      </header>
      <Modal showModal={showModal} setShowModal={setShowModal}/> 
    </StyledHeader>

)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
