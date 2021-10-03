import styled from 'styled-components';


export const Container = styled.div`
    width: 1400px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    color: black;
  

`

export const HeaderImageContainer = styled.div`

        
    margin-left: 150px;
    


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