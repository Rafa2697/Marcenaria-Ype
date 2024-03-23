import React from "react"
import imgFachada from "../img/fachada.jpeg"
import { forwardRef } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    background-color: #DEE2E6;
    align-items: center;
    @media (max-width:425px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        
    }
`

 const DivImg = styled.div`
    width: 50%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:425px) {
        width: 100%;
        
    }
    img{
        width: 90%;
        height: 90%;
        border-radius: 10px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }

    @media (max-width: 768px) {
        height: 70%;
    }


`

const DivSobre = styled.div`
    width: 50%;
    @media (max-width:425px) {
        width: 100%;
    }
    h1{
        text-align: center;
        padding: 10px;
        color: #492818;
        font-size: 50px;
    }

    p{
        text-align: justify;
        padding: 10px;
    }
`
const Sobre = forwardRef((props, ref) => {
    return (
        <Container ref={ref}>
            <DivImg>
                <img src={imgFachada} alt="fachada" title="fachada" />
            </DivImg>
            <DivSobre>
                <h1>Sobre</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum accusantium, et ea repellendus impedit corrupti illo voluptatibus consequatur, accusamus alias laboriosam nobis, sunt officia placeat. Fuga hic totam sint.</p>
            </DivSobre>
        </Container>
    )
})

export default Sobre