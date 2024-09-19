import { useState, useEffect } from 'react';
import { ICarousel } from '../utils/type';
import { dataCarousel } from '../utils/constant';
import { motion } from 'framer-motion';

const Carousel = () => {
  const [carousel] = useState<ICarousel[]>(dataCarousel);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === carousel.length - 1 ? 0 : prevIndex + 1));
    }, 4500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [carousel.length]);

  return (
    <motion.ul className="container-carousel" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
      {carousel.map((item, index) => (
        <motion.li
          key={item.no}
          className={`transition-all duration-[2000ms]  delay-1000 absolute z-10 rounded-full border-4 overflow-hidden  ${index === currentIndex ? 'translate-x-[0%]' : 'translate-x-[200%]'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 3 }}
        >
          <img src={item.url} alt={item.alt} className="h-[13rem]  w-[10rem] hover:scale-110 overflow-hidden rounded-xl transition-all object-cover" />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Carousel;
