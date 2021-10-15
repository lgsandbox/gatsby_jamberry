import styled from 'styled-components';


export const Container = styled.div`
    width: 1400px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    color: #1c0400;

  

`

export const HeaderImageContainer = styled.div`

    position: relative;        
    margin-left: 150px;
    left: 50px;
    


    @media(max-width: ${({theme}) => theme.mobile}) {
        margin-left: 0px;
        margin-top: 20px;
    }
`

export const ContainerFooter = styled.div`
    width: 1400px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    color: white;
`

export const AnimatedArrow = styled.span`


`