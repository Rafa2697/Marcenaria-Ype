import Header from "../components/Header.jsx";
import DivSlide from "../components/Slide.jsx";
import Sobre from "../components/Sobre.jsx";
import Servicos from "../components/Servicos.jsx";
import Contato from "../components/Contato.jsx";
import Footer from "../components/Footer.jsx";
import { useRef } from "react";


export default function Index() {
    const contactRef = useRef(null);
    const sobreRef = useRef(null);
    const servicosRef = useRef(null);

    
    return (
        <div>
            <Header contactRef={contactRef} sobreRef={sobreRef} servicosRef={servicosRef}/>
            <DivSlide />
            <Sobre ref={sobreRef}/>
            <Servicos ref={servicosRef} />
            <Contato ref={contactRef}/>
            <Footer/>

        </div>
    )
}


