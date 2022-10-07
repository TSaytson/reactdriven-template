import styled from "styled-components"
import Logo from '../assets/images/DrivenLogo.png'
import Background from '../assets/images/DrivenBackground.jpg'

export default function Home() {
    return (
        <Wrapper Background={Background}>
            <a href="https://www.driven.com.br/" target="_blank">
                <img src={Logo} href="https://www.driven.com.br/"></img>
            </a>
            <a href="https://github.com/TSaytson/reactdriven-template">
                <h1>React + Axios + Styled-Components + React Router + Font Roboto</h1>
            </a>
            <h2>Comece editando o arquivo Home em "Components"</h2>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    background-image: url(${(props) => props.Background});
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 100vh;
    a{
        text-decoration: none;
    }
    a:first-child{
        box-shadow: 1px 1px 3px 5px rgba(20, 50, 20, 0.5);
        transition: all 0.5s;
    }
    a img{
        width: 40vw;
        height: 30vw;
        transition: all 0.5s;
        cursor: pointer;
    }
    a img:hover{
        filter: brightness(140%);
    }
    h1, h2, h3{
        font-family: 'Roboto';
        font-weight: bold;
        transition: all 0.5s;
        color:white;
    }
    h1:hover, h2:hover{
        filter: brightness(140%);
        transform: scale(1.05);
        cursor: help;
    }
    h2:hover{
        cursor: text;
    }
`