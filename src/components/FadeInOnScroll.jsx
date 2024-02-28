import React from 'react';
import { motion } from 'framer-motion';

const FadeInOnScroll = ({ children, scrollPosition }) => {
 const isVisible = scrollPosition > 100;

 const variants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
 };

 return (
    <motion.div
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
 );
};

export default FadeInOnScroll;
