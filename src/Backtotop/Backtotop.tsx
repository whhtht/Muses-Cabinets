import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

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
        <Box
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                display: isVisible ? 'block' : 'none',
                position: 'fixed',
                bottom: '150px',
                right: '50px',
                width: '40px',
                height: '40px',
                border:'none',
                perspective: '1000px',
                zIndex: 5,
                cursor: 'pointer',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s',
                    border:'none',
                    transform: isHovered ? 'rotateX(90deg)' : 'rotateX(0)',
                    transformOrigin:'top',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#b22222',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border:'none',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateX(0deg)',
                        transformOrigin:'top',
                    }}
                >
                    {'^'}
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#333333',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border:'none',
                        transform: 'rotateX(-90deg)',
                        transformOrigin:'top',
                    }}
                >
                    {'^'}
                </Box>
            </Box>
        </Box>
    );
};

export default BackToTopButton;
