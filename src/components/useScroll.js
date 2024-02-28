import { useState, useEffect } from 'react';

const useScroll = () => {
 const [scrollPosition, setScrollPosition] = useState(0);

 useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return scrollPosition;
};

export default useScroll;
