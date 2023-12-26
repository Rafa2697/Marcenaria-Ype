

import styled from 'styled-components';
import { useRef } from 'react';


const NavHeader = styled.nav`
    display: flex;
    align-items: center;
    height: 10vh;
    background-color: #492818;
    justify-content: space-around;

    h1{
        text-align: left;
        color:white ;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    ul{
        display: flex;
        width: 50%;
        justify-content: space-around;
        gap: 10px;
        list-style: none;
        color: white;

        @media (max-width:768px){
            display: none;
        }
    }
    li{
        cursor: pointer;
        font-size: 24px;
        padding: 10px;
        border-radius: 2px;
        
    }
    li:hover{
        background-color:beige ;
        color: #492818;
    }

`
const Header = ({contactRef, sobreRef, servicosRef}) => {

    

   const scrollToSection = (elementRef) => {
    console.log("teste")
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
    })
   }
    return(
            <NavHeader>
                <h1>Ypê Art - Marcenaria</h1>
                <ul>
                    
                    <li onClick={() => scrollToSection(sobreRef)}>Sobre</li>
                    <li onClick={() => scrollToSection(servicosRef)} >Serviços</li>
                    <li onClick={() => scrollToSection(contactRef)}>Contato</li>
            
                </ul>
            </NavHeader>
            


        
    )
}

export default Header