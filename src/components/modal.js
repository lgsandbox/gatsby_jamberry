import * as React from "react"
import styled from "styled-components";

const ModalCard = styled.div`

  width: 40%;
  height: 650px;
  margin: 20px;
  background-color: white;
  position: fixed;
  top: 1%;
  z-index: 5;
  display: flex;

`

export default function Modal({ showModal, setShowModal }) {
  return (

   <>{showModal ? <ModalCard> Test card component on click 123</ModalCard> : null } 
   </>

  )
}