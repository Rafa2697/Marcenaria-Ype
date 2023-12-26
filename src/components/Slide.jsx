
import { useState, useEffect, useRef } from 'react'
import '../styles/style.css'
import {motion} from 'framer-motion'
import img1 from '../img/foto5.jpeg'
import img2 from '../img/fotogeladeira.jpeg'
import img3 from '../img/foto3.jpg'
import img4 from '../img/foto1.jpeg'
import img5 from '../img/rustico.jpeg'

const images = [img1, img2, img3,img4, img5]

export default function Slide(){

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)

        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    
    return(
        <motion.div className="slider">
           <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
               <motion.div className='inner'
               drag="x"
               dragConstraints={{right: 0, left: -width}}
               initial={{x:100}}
               animate={{x:0}}
               transition={{duration:0.9}}
               >
                {images.map(image => (
                    <motion.div className='image' key={image}>
                        <img src={image} alt="texto alt" />
                    </motion.div>
                ))}
               </motion.div>
           </motion.div>
        </motion.div>
    )
}