import React from "react";
import { Box, Typography, IconButton, } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
    return(
        <Box
            sx={{
                backgroundColor: '#1A1C20',
                color: '#ffffff',
                padding:'16px 0',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#2D2F34',
                }}
            />
            <Box
                sx={{
                    display:'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin:'10px 80px',
                }}
            >
                <Typography sx={{ variant: "b2" }} >
                    &copy; Copyright 2023 Muses abinets. All rights reserved.
                </Typography>

                <Box>
                    <IconButton
                        href=" "
                        target="_blank"
                        rel="noopener"
                        sx={{ backgroundColor: '#db2d22', color:'#ffffff', margin:'0 15px'}}
                    >
                        <Facebook sx={{ fontSize:20,}} />
                    </IconButton>
                    <IconButton
                        href=" "
                        target="_blank"
                        rel="noopener"
                        sx={{ backgroundColor: '#db2d22', color:'#ffffff', margin:'0 15px'}}
                    >
                        <Instagram sx={{ fontSize:20,}} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}
export default Footer;