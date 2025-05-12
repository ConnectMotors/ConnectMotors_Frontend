import styled from "styled-components";

export const IntroducaoBG = styled.div`

    padding-top: 150px;
`

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    h2{
        margin-bottom: 40px;
    }

    @media(max-width: 1440px){
        max-width: 1200px;
    }
`

export const List = styled.li`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;

`

export const Button = styled.button`
    background-color: var(--azul-4);
    color: var(--branco);
    border: none;
    border-radius: 10px;
    padding: 12px 32px;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;

    &:hover{
        background-color: #4043FF;
    }

`

export const Vantagens = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 120px;
    

    p{
        max-width: 38ch;
    }

`

export const Divisor = styled.img`
    display: block;
    width: 100%;
    margin: 40px 0px;

`