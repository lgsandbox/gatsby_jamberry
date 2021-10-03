import styled from "styled-components";

export const Button = styled.button`
    
    border-radius: 50px;
    border-color: green ;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 13px 30px;
    background-color: ${({ theme }) => theme.colors.buttonbg};
    color: ${({ theme }) => theme.colors.buttoncolor};
    margin-bottom: 20px;


    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

`

export const SecondButton = styled(Button)`

    color: ${({ theme }) => theme.colors.buttonbg};
    background-color: ${({ theme }) => theme.colors.buttoncolor};
    margin-top: 20px;
    margin-bottom: 25px;

`