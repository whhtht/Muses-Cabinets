import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (document.documentElement.scrollTop > 900 || document.body.scrollTop > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Fab
            color="primary"
            size="small"
            onClick={scrollToTop}
            style={{
                display: isVisible ? 'block' : 'none',
                position: 'fixed',
                bottom: '100px',
                right: '30px',
                zIndex: 5,
                backgroundColor:'#b22222',
            }}
        >
            <KeyboardArrowUpIcon />
        </Fab>
    );
};
export default BackToTopButton;