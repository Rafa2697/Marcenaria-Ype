
import styled from "styled-components";
import foto1 from "../img/foto1.jpeg"
import foto2 from "../img/rustico.jpeg"
import foto3 from "../img/foto2.jpg"
import { forwardRef } from "react"

const Container = styled.div`
    width: 100% ;
    height: 100vh;
    margin:10px 0;
    
    
    h1{
        text-align: center;
        color: #492818;
        padding-top: 10px;
        font-size: 50px;
    }
`
const WraperDiv = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    height: 80vh;
    align-items: center;

    @media(max-width:655px) {
        flex-direction: column;
    }
`
const DivFoto1 = styled.div`
    background-color: white;
    width: 30%;
    height: 50%;
    background-image:url(${foto1});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #F8F9FA;
    border-radius: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    @media (max-width:425px) {
       width: 90%;
       margin-top: 10px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        padding: 10px;
    }
    p{
        font-size: 14px;
        text-align: center;

    }
`
const DivFoto2 = styled.div`
    background-color: white;
    width: 30%;
    height: 50%;
    background-image:url(${foto2});
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #F8F9FA;
    border-radius: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    @media (max-width:425px) {
       width: 90%;
       margin-top: 10px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        padding: 10px;
    }
    p{
        font-size: 14px;
        text-align: center;

    }
`
const DivFoto3 = styled.div`
    background-color: white;
    width: 30%;
    height: 50%;
    background-image:url(${foto3});
    background-size: cover;
    background-position: bottom;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #F8F9FA;
    border-radius: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    @media (max-width:425px) {
       width: 90%;
       margin-top: 10px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        padding: 10px;
    }
    p{
        font-size: 14px;
        text-align: center;

    }
`


export default forwardRef(function Servicos(props, ref){
    return(
        <Container>
            <h1 ref={ref}>Serviços</h1>
            <WraperDiv>
                <DivFoto1>
                    <h2>Moveis planejados</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis corporis fugit vel blanditiis!</p>
                </DivFoto1>
                <DivFoto2>
                    <h2>Moveis rusticos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis corporis fugit vel blanditiis!</p>
                </DivFoto2>
                <DivFoto3>
                    <h2>Pronta Entrega</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis corporis fugit vel blanditiis!</p>
                </DivFoto3>
            </WraperDiv>
        </Container>
    )
})