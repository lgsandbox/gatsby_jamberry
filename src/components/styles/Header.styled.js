import styled from "styled-components";

export const StyledHeader = styled.header`
    
    position: relative;

    background-color: ${({ theme }) => theme.colors.header};
    padding: 20px 0;
    
    @media(max-width: ${({theme}) => theme.mobile}) {
        padding: 0px 0;
    }

    h1{
        font-size: 26px;
    }
    p{
        font-size: 18px;
        font-weight: bold;
    }

`

export const Nav = styled.nav`

    display: flex;

    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    color:black;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
    
`

export const Logo = styled.div`

    position: relative;
    
    opacity: 0;

    @media(max-width: ${({theme}) => theme.mobile}) {
       right: 50px
    }

`

export const StyledCanvas = styled.div`

position:absolute;
width: 100%;
height: 100%;

z-index:-1;


  
`