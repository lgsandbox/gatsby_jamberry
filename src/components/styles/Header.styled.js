import styled from "styled-components";




export const StyledHeader = styled.header`
    
    background-color: ${({ theme }) => theme.colors.header};
    padding: 30px 0;



    
    @media(max-width: ${({theme}) => theme.mobile}) {
        padding: 0px 0;
    }
    

`

export const Nav = styled.nav`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    color:black;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
    
`

export const Logo = styled.div`

    position: relative;
    right: 50px;
    opacity: 0;

`

