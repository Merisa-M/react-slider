import "./App.css";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import images from "./image";

function App() {
  const[width, setWidth] =useState(0);
  const carousel = useRef();
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth -carousel.current.offsetWidth)
  }, []);
//  console.log(images);
  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div drag="x" dragConstraints={{right:0, left:-width}} className="innerCarousel">
          {
            images.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt=""/>
                </motion.div>
              );

            })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
