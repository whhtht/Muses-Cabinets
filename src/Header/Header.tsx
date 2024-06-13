import React from 'react';
import Muses from '../Logo/muses-logo.png';
import Cabinets from '../Logo/Popover-1.jpeg';
import Hardware from '../Logo/Popover-2.jpeg';
import Richelieu from '../Logo/Popover-3.jpeg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useState } from 'react';


export default function Header() {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [isOpen, setIsOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsOpen(true);
    };
    const handleMouseLeave = () => {
        setIsOpen(false);
    };

   
  return (
    <AppBar position="sticky" sx={{ backgroundColor:'#fff', height:'8vh'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography href=' ' component='a' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }}>
                <img src={Muses} />
            </Typography>


            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>

                {/* App Model MenuIcon */}
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{ color:'#f22222'}}
                >
                    <MenuIcon sx={{fontSize:36}} />
                </IconButton>


                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <MenuItem  
                        onClick={handleCloseNavMenu} 
                        sx={{
                            display:'block',
                            maxWidth:'100%',
                            width:'1200px',
                            overflowX:'hidden',
                            '&:hover': {
                                backgroundColor: '#fff',
                            },
                        }}
                    >
                        <Typography 
                            textAlign="left" 
                            component='a' 
                            href=' '
                            sx={{
                                display:'flex',
                                textDecoration:'none',
                                flexDirection:'row',
                                borderBottom:'1px solid black',
                            }}
                        >
                            <Typography 
                                sx={{
                                    flexGrow:1,
                                    fontSize:20,
                                    padding:'10px 0',
                                    display:'block',
                                    textDecoration:'none',
                                    color:'#000',
                                    '&:hover': {
                                        color: 'brown',
                                    },
                                }}
                            >
                                Products
                            </Typography>
                            <Button
                                sx={{
                                    backgroundColor:'#fff',
                                    color:'#f22222',
                                    fontSize:20,
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                    },
                                }}
                            >
                                <ArrowForwardIosIcon />
                            </Button>
                        </Typography>
                        <Typography 
                            textAlign="left" 
                            component='a' 
                            href=' '
                            sx={{
                                flexGrow:1,
                                fontSize:20,
                                padding:'10px 0',
                                display:'block',
                                textDecoration:'none',
                                color:'#000',
                                borderBottom:'1px solid black',
                                '&:hover': {
                                    color: 'brown',
                                },
                            }}
                        >
                            Quick Order
                        </Typography>
                        <Typography 
                            textAlign="left" 
                            component='a' 
                            href=' '
                            sx={{
                                flexGrow:1,
                                fontSize:20,
                                padding:'10px 0',
                                display:'block',
                                textDecoration:'none',
                                color:'#000',
                                borderBottom:'1px solid black',
                                '&:hover': {
                                    color: 'brown',
                                },
                            }}
                        >
                            Samples
                        </Typography>
                        <Typography 
                            textAlign="left" 
                            component='a' 
                            href=' '
                            sx={{
                                flexGrow:1,
                                fontSize:20,
                                padding:'10px 0',
                                display:'block',
                                textDecoration:'none',
                                color:'#000',
                                borderBottom:'1px solid black',
                                '&:hover': {
                                    color: 'brown',
                                },
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Typography 
                            textAlign="left" 
                            component='a' 
                            href=' '
                            sx={{
                                flexGrow:1,
                                fontSize:20,
                                padding:'10px 0',
                                display:'block',
                                textDecoration:'none',
                                color:'#000',
                                borderBottom:'1px solid black',
                                '&:hover': {
                                    color: 'brown',
                                },
                            }}
                        >
                            Download
                        </Typography>
                        <Typography
                            component='a'
                            sx={{
                                display:'flex',
                                alignItems:'center',
                                alignContent:'center',
                                fontSize:20,
                                padding:'25px 0',
                            }}
                        >
                             <MailOutlineIcon href=' ' sx={{color:'#f22222', fontSize:36}}/> Info@Musescabinets.Com
                        </Typography>
                        <Typography
                            component='a'
                            sx={{
                                display:'flex',
                                alignItems:'center',
                                alignContent:'center',
                                fontSize:20,
                                paddingBottom:'10px',
                            }}
                        >
                             <PhoneIphoneIcon href=' ' sx={{color:'#f22222', fontSize:36}}/> 800-806-0708
                        </Typography>
                    </MenuItem>
                </Menu>
            </Box>


            <Typography href=' ' component='a' sx={{ display: { xs: 'flex', md:'none' },mr: 2, flexGrow: 1,}}>
                <img src={Muses} />
            </Typography>
            <Box 
                sx={{ 
                    flexWrap:'nowrap',
                    flexGrow:1, 
                    paddingLeft:'15px', 
                    display: { xs: 'none', md: 'flex' },
                }} 
            >
                <Box
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        marginTop:'15px',
                        marginLeft:'10px',
                        marginRight:'10px',
                        cursor: 'pointer',
                        pb:'35px',
                        
                        '&:hover': {
                            color: 'brown',
                        },
                        '&:hover::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'visible',
                            transform: 'scaleX(1)',
                            transition: 'all 0.3s ease-in-out',
                        },
                        '::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'hidden',
                            transform: 'scaleX(0)',
                            transition: 'all 0.3s ease-in-out',
                        },
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} 
                >
                    <Typography
                        component='a'
                        href=' '
                        sx={{ 
                            fontSize: '20px',
                            color:'#000',
                            display: 'inline-block',
                            flexWrap:'nowrap',
                            textDecoration:'none',
                        }}
                    >
                       Product
                    </Typography>
                    {isOpen && (
                        <Box
                            sx={{
                                display:'flex',
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                backgroundColor:'white',
                                border: '1px solid #ccc',
                                zIndex: 1,
                            }}
                        >
                            <Typography
                                component='a'
                                href=' '
                                sx={{
                                    display:'block', 
                                    textDecoration:'none',
                                    py:'20px',
                                    pl:'30px',
                                    pr:'15px',
                                    fontSize:24,
                                    color:'black',
                                }}
                            >
                                <Typography component='img' src={Cabinets} sx={{width:'250px',height:'auto'}} /><br/> Cabinets
                            </Typography>
                            <Typography
                                component='a'
                                href=' '
                                sx={{
                                    display:'block', 
                                    textDecoration:'none',
                                    p:'20px 15px',
                                    fontSize:24,
                                    color:'black',
                                }}
                            >
                                <Typography component='img' src={Hardware} sx={{width:'250px',height:'auto'}}/><br/> Hardware
                            </Typography>
                            <Typography
                                component='a'
                                href=' '
                                sx={{
                                    display:'block', 
                                    textDecoration:'none',
                                    py:'20px',
                                    pl:'15px',
                                    pr:'30px',
                                    fontSize:24,
                                    color:'black',
                                }}
                            >
                                <Typography component='img' src={Richelieu} sx={{width:'250px',height:'auto'}}/><br/> Richelieu Items
                            </Typography>
                        </Box>
                        )
                    }
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom:'15px',
                        marginTop:'15px',
                        marginLeft:'10px',
                        marginRight:'10px',
                        cursor: 'pointer',
                        '&:hover': {
                            color: 'brown',
                        },
                        '&:hover::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'visible',
                            transform: 'scaleX(1)',
                            transition: 'all 0.3s ease-in-out',
                        },
                        '::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'hidden',
                            transform: 'scaleX(0)',
                            transition: 'all 0.3s ease-in-out',
                        },
                    }}
                >
                <Typography 
                    component='a'
                    href=' '
                    sx={{ 
                        fontSize: 20,
                        color:'#000',
                        position: 'relative',
                        display: 'inline-block',
                        cursor: 'pointer',
                        textDecoration:'none',
                        flexWrap:'nowrap',
                    }}
                >
                    Quick Order
                </Typography>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom:'15px',
                        marginTop:'15px',
                        marginLeft:'10px',
                        marginRight:'10px',
                        cursor: 'pointer',
                        '&:hover': {
                            color: 'brown',
                        },
                        '&:hover::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'visible',
                            transform: 'scaleX(1)',
                            transition: 'all 0.3s ease-in-out',
                        },
                        '::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'hidden',
                            transform: 'scaleX(0)',
                            transition: 'all 0.3s ease-in-out',
                        },
                }}
                >
                <Typography 
                    component='a'
                    href=' '
                    sx={{ 
                        fontSize: 20,
                        color:'#000',
                        position: 'relative',
                        display: 'inline-block',
                        cursor: 'pointer',
                        textDecoration:'none',
                        flexWrap:'nowrap',
                    }}
                >
                    Samples
                </Typography>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom:'15px',
                        marginTop:'15px',
                        marginLeft:'10px',
                        marginRight:'10px',
                        cursor: 'pointer',
                        '&:hover': {
                            color: 'brown',
                        },
                        '&:hover::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'visible',
                            transform: 'scaleX(1)',
                            transition: 'all 0.3s ease-in-out',
                        },
                        '::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'hidden',
                            transform: 'scaleX(0)',
                            transition: 'all 0.3s ease-in-out',
                        },
                    }}
                >
                <Typography 
                    component='a'
                    href=' '
                    sx={{ 
                        fontSize: 20,
                        color:'#000',
                        position: 'relative',
                        display: 'inline-block',
                        cursor: 'pointer',
                        textDecoration:'none',
                        flexWrap:'nowrap',
                    }}
                >
                    Contact Us
                </Typography>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom:'15px',
                        marginTop:'15px',
                        marginLeft:'10px',
                        marginRight:'10px',
                        cursor: 'pointer',
                        '&:hover': {
                            color: 'brown',
                        },
                        '&:hover::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'visible',
                            transform: 'scaleX(1)',
                            transition: 'all 0.3s ease-in-out',
                        },
                        '::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '30px',
                            left: '0',
                            backgroundColor: 'brown',
                            visibility: 'hidden',
                            transform: 'scaleX(0)',
                            transition: 'all 0.3s ease-in-out',
                        },
                    }}
                >
                <Typography 
                    component='a'
                    href=' '
                    sx={{ 
                        fontSize: 20,
                        color:'#000',
                        position: 'relative',
                        display: 'inline-block',
                        cursor: 'pointer',
                        textDecoration:'none',
                        flexWrap:'nowrap',
                    }}
                >
                    Download
                </Typography>
                </Box>
            </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography
                component='a'
                href=' '
                sx={{textDecorationLine:'none',color:'#000',fontSize:20,}}
            >
                Dealer Login
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

