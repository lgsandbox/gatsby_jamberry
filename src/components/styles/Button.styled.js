import styled from "styled-components";

export const Button = styled.button`
    
    border-radius: 15px;
    border-color: #00BFA6;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 13px 30px;
    background-color: ${({ theme }) => theme.colors.buttonbg};
    color: ${({ theme }) => theme.colors.buttoncolor};
    margin-bottom: 30px;
    margin-top: 15px;
    opacity: 0;
    position: relative;


    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

`

export const SecondButton = styled(Button)`

    color: ${({ theme }) => theme.colors.buttonbg};
    background-color: ${({ theme }) => theme.colors.buttoncolor};
    margin-top: 140px;
    margin-bottom: 25px;
    opacity: 1;
    left: 0px;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }


`