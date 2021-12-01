import * as React from "react"
import { ContainerFooter } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from './styles/Footer.styled'



export default function Footer() {
    return (

      <StyledFooter>
        <ContainerFooter>
        
          <Flex>
            <ul>
              <li> Lorem ipsum dolor sit amet</li>
              <li>+1-543-123-4567</li>
              <li>example@biggrow.com</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>
            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </Flex>
          <p>&copy; 2021 bigGrow. All rights reserved</p>
        </ContainerFooter>
      </StyledFooter>

    )
  }