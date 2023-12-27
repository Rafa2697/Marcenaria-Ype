import styled from 'styled-components'

const Div = styled.footer`

    width: 100%;
    height: 10vh;
    text-align: center;
    background: rgba(20, 19, 0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #492818;
   

`

export default function Footer(){
    return(
        <Div>
        <p>&copy;Rafael Mattos</p>
        </Div>

    )
   
}