import styled from "styled-components";

export const DivMain = styled.div`

`

export const NavMenu = styled.nav`
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    section{
        margin-left: 100px;
    }
    a{
        margin: 10px;
        :hover{
            cursor: pointer;
        }
    }
`

export const SectionConteinerTitle = styled.section`
    margin-top: 100px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
`

export const SectionMe = styled.section`
    display: flex;
    margin-top: 200px;
    img{
        width: 250px;
        border-radius: 40%;
    }
    p{
        width: 60vw;
        margin-left: 20px;
    }
`