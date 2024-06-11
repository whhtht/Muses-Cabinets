import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Box, Typography, Button, } from '@mui/material';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const MyProduct: React.FC = () => {

    const images = [
        {src:'/Picture/Product_1.jpeg', name:'white', url:' '},
        {src:'/Picture/Product_2.jpeg', name:'Product2', url:' '},
        {src:'/Picture/Product_3.jpeg', name:'Product3', url:' '},
        {src:'/Picture/Product_4.jpg', name:'Product4', url:' '},
        {src:'/Picture/Product_5.jpg', name:'Product5', url:' '},
        {src:'/Picture/Product_6.jpg', name:'Product6', url:' '},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const numVisibleImages = 4;

    const intervalRef = useRef<number | undefined>(undefined);
  
    const startInterval = useCallback(() => {
        if (intervalRef.current !== undefined) {
          clearInterval(intervalRef.current);
        }
        intervalRef.current = window.setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
      }, [images.length]);

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current !== undefined) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startInterval]);
  
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        startInterval();
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        startInterval();
    };
  
    const handleMouseEnter = () => {
        if (intervalRef.current !== undefined) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        startInterval();
    };

    const handleImageClick = (url: string) => {
        window.location.href = url;
    };
  
    const renderImages = () => {
        const imagesToShow = [];
        for (let i = 0; i < numVisibleImages; i++) {
            const imgIndex = (currentIndex + i) % images.length;
            imagesToShow.push(
                <Box
                    key={imgIndex}
                    sx={{
                        position: 'relative',
                        flex: `0 0 ${100 / numVisibleImages}%`,
                        height: 'auto',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        zIndex: 1,
                        '&:hover .overlay': {
                            opacity: 1,
                        },
                        '&:hover .icon': {
                            transform: 'translateY(0)',
                            opacity: 1,
                        },
                        '&:hover .animatedText': {
                            transform: 'translateY(0)',
                            opacity: 1,
                        },
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleImageClick(images[imgIndex].url)}
                >
                    <img
                        src={images[imgIndex].src}
                        alt={`Slide ${imgIndex}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'filter 0.3s',
                        }}
                    />
                    <Box
                        className="overlay"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            flexDirection: 'column',
                            top:0,
                            left: 0,
                            right: 0,
                            buttom:0,
                            width: '100%',
                            height: '100%',
                            pt: '35%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            opacity: 0,
                            transition: 'opacity 0.5s ease',
                        }}
                    >
                        <Box
                            className="icon"
                            sx={{
                                transform: 'translateY(100%)',
                                opacity: 0,
                                transition: 'transform 1s ease-out, opacity 1s ease-out',
                            }}
                        >
                            <ZoomOutMapIcon sx={{ fontSize: 50 }} />
                        </Box>
                        <Typography
                            className="animatedText"
                            variant="h4"
                            sx={{
                                transform: 'translateY(100%)',
                                opacity: 0,
                                color: 'white',
                                zIndex: 5,
                                transition: 'transform 1s ease-out, opacity 1s ease-out',
                            }}
                        >
                            {images[imgIndex].name}
                        </Typography>
                    </Box>
                </Box>
            );
        }
        return imagesToShow;
    };
      
    return(
        <Box>
            <Box
                sx={{
                    display:'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems:'center',
                    flexDirection:'column',
                    pt: '100px',
                    width:'100%',
                }}
            >
                <Typography 
                    sx={{
                        fontVariant:'h2',
                        fontFamily:'Roboto',
                        marginBottom:'10px',
                        fontSize:48,
                    }}
                >
                    Our Products
                </Typography>
                <Box
                    sx={{
                        width: '50px',
                        height: '4px',
                        backgroundColor: '#b22222',
                    }}
                />
            </Box>
            <Box 
                sx={{ 
                    display: 'flex',
                    justifyContent:'center',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Button 
                    onClick={goToPrevious}
                    sx={{ 
                        position:'absolute',
                        margin: '10px',
                        backgroundColor:'#A22223',
                        color:'#fff',
                        height:'90px',
                        width:'30px',
                        left:0,
                        border:0,
                        fontSize: 36,
                        zIndex:5,
                        '&:hover':{
                            backgroundColor:'#333333',
                        },
                    }}
                >
                    {'<'}
                </Button>
                <Box 
                    sx={{
                        width: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        flexGrow:1,
                        py:'100px',
                    }}
                >
                    {renderImages()}
                </Box>
                <Button 
                    onClick={goToNext} 
                    sx={{ 
                        position:'absolute',
                        margin: '10px',
                        backgroundColor:'#A22223',
                        color:'#fff',
                        height:'90px',
                        width:'30px',
                        right:0,
                        border:0,
                        fontSize: 36,
                        zIndex:5,
                        '&:hover':{
                            backgroundColor:'#333333',
                        },
                    }}
                >
                    {'>'}
                </Button>
            </Box>
            <Box
                sx={{
                    display:'flex',
                    justifyContent: 'center',
                    paddingBottom:'100px',
                }}
            >
                <Button
                    sx={{
                        display:'inline-block',
                        textAlign: 'center',
                        color: '#fff',
                        border:'2px solid #b22222',
                        padding:'10px 15px',
                        fontSize:'16px',
                        textDecoration:'none',
                        backgroundColor:'#b22222',
                        transition:'0.3s',
                        '&:hover':{
                        backgroundColor:'#fff',
                        color:'#000',
                        border:'2px solid #000',
                        transition:'0.3s',
                        }
                    }}
                    href=" " 
                >
                    Views All Cabinets
                </Button>
            </Box>
        </Box>
    );
};
export default MyProduct;