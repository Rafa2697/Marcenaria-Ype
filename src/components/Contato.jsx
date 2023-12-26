
import styled from 'styled-components';
import { forwardRef} from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Div = styled.div`
    height: 100vh;
    h1{
        text-align: center;
        color: #492818;
        height: auto;
        font-size: 50px;
    }
`
const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width:768px) {
        flex-direction: column-reverse;
    }
`
const Form = styled.form`
    
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    
    
    #wraper-input{
        display: flex;
        justify-content: center;
        gap: 5px;
        margin: 0 auto;
        width: 49vw;
        
        @media (max-width:768px) {
            width: 80vw;
        }
    }

    #wraper-input input{
        width: 100%;
        background-color: #492818;
        border: none;
        padding: 10px;
        border-radius: 5px;
        color: #F8F9FA;
       
    }

    input::placeholder{
            color: #F8F9FA;
        }

    #wraper-textarea{
        display: flex;
    }

    textarea{
        width: 49vw;
        resize: vertical;
        margin: 10px auto;
        background-color: #492818;
        border: none;
        padding: 10px 10px 0 ;
        color: #F8F9FA;
        @media (max-width:768px) {
            width: 80vw;
        }
    }
    textarea::placeholder{
        color: #F8F9FA;
    }

    #wraper-button{
        width: 100%;
        text-align: center;
    }

    button{
        border: none;
        width: 150px;
        height: 50px;
        margin: 10px;
        color: #492818;
        transition: 0.5s;
    }

    button:hover{
        background-color: #492818;
        color: #F8F9FA;
        border-radius: 3px;
    }


`
const DataContact = styled.div`
   
    width: 40%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: end;

    @media (max-width:768px) {
        width: 100%;
    }
    #wraper-redes{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 100%;
        font-size: 26px;

    }

    
   
`


    
    const Contato = forwardRef((props, ref) => {
        
    return(

        <Div ref={ref}>
            <h1 >Contato</h1>
            <Container>
                <Form action="https://formsubmit.co/rafael.mattos468@gmail.com" method="POST">
                    <div id='wraper-input'>
                        <input type="text" name="nome" placeholder="Nome" />
                        <input type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div id='wraper-textarea'>
                        <textarea name="mensage" id="msg" cols="30" rows="10" placeholder='Deixe aqui sua mensagem...'></textarea>
                    </div>
                    <div id='wraper-button'><button type="submit">Enviar</button></div>
                </Form>
                <DataContact>
                    <div id='wraper-redes'>
                        <h1>Redes Sociais</h1>
                         <p >numero <FaWhatsapp /></p>
                         <p>@intragram <FaInstagramSquare /></p>
                    </div>
                </DataContact>
            </Container>
        </Div>
    )
})

export default Contato;