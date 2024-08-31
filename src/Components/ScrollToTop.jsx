import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const locaton = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })

    },[locaton])

  return null;
}

export default ScrollToTop