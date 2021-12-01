import * as React from "react"
import { StyledCard } from './styles/Card.styled'
import CardImage from "../components/svg/assets/appimagesvg.svg"

export default function Card() {
  
  
  return (

    <StyledCard id="cardDown">


        <CardImage height="100%" width="50%"/>


        <div id="reveal">
        <h2>Tradional Web Design & Beyond</h2>
      <p></p><p> We offer advanced web solutions utilizing the most modern tech. From Shopify eCommerce integration and Web3, to headless CMS and SSR frameworks. Whatever your business needs, we've got you covered.  </p>
      </div>

    </StyledCard>
    
  )
}