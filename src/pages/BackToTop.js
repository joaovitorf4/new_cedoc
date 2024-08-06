import React, { useState, useEffect } from 'react';
import './BackToTop.css';
import backTop from '../imgs/top.svg'

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={isVisible ? 'back-to-top-show' : 'back-to-top'}>
            <img src={backTop} 
                onClick={scrollToTop}
                title="Go to top" alt="icon whatsapp" />
        </div>
    );
};

export default BackToTop;
