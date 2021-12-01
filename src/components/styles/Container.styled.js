import styled from 'styled-components';

export const Container = styled.div`
    
    width: 1400px;
    max-width: 100%;
    padding: 0 0px;
    margin: 0 auto;
    color: #1c0400;

    @media(max-width: ${({theme}) => theme.mobile}) {
        padding: 0 10px;
    }

`

export const HeaderImageContainer = styled.div`
display:flex;
position: relative;
align-items: center;
justify-content: space-between;
opacity: 0;
& > img {
margin-left: auto;


}

`

export const ContainerFooter = styled.div`

    width: 1400px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    color: white;

`

export const ArrowContainer = styled.div`

    display: flex;
    justify-content:center;
    color: black;
    opacity: 0;
    padding-top:42px;

    div {
        margin:5px;

    }

`