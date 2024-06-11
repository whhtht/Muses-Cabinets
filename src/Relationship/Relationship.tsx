import { Box, Link, Grid } from '@mui/material';

  
function Relationship() {
  return (
    <Box
        sx={{
            display:'flex',
            width:'100%',
            height:'60vh',
            flexDirection:'row',
            backgroundColor:'#1A1C20',
        }}
    >


{/* LeftSide */}
        <Box
            sx={{
                display:'flex',
                flexDirection:'row',
                width:'50%',
                fontFamily:'Roboto',
                color:'#fff',
                fontSize: 12,
            }}
        >


{/* OurCompany */}
            <Box
                sx={{
                    width:'40%',
                    paddingTop:'30px',
                    paddingLeft:'80px',
                }}
            >
                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        paddingBottom:'20px',
                        fontSize:14,
                    }}
                >
                    <h2>
                        Our Company
                    </h2>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Link 
                            sx={{ 
                                color:'#b2aeae', 
                                '&:hover':{
                                    color:'#b22222',
                                    transition:'0.3s',
                                    fontSize:14,
                                }
                            }}
                            underline='none'
                            href=' '
                        >
                            Products
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link 
                            sx={{ 
                                color:'#b2aeae', 
                                '&:hover':{
                                    color:'#b22222',
                                    transition:'0.3s',
                                    fontSize:14,
                                }
                            }}
                            underline='none'
                            href=' '
                        >
                            About Us
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link 
                            sx={{ 
                                color:'#b2aeae', 
                                '&:hover':{
                                    color:'#b22222',
                                    transition:'0.3s',
                                    fontSize:14,
                                }
                            }}
                            underline='none'
                            href=' '
                        >
                            Contact Us
                        </Link>
                    </Grid>
                </Grid>
            </Box>


{/* Our Police */}
            <Box
                sx={{
                    width:'70%',
                    paddingTop:'30px',
                }}
            >
                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        paddingBottom:'20px',
                        fontSize:14,
                    }}
                >
                    <h2>
                        Our Policies
                    </h2>
                </Box>
                <Grid  container rowSpacing={4} columnSpacing={1}>
                    <Grid item xs={6}>
                        <Link 
                            sx={{
                                color:'#b2aeae', 
                                '&:hover':{
                                    color:'#b22222',
                                    transition:'0.3s',
                                }
                            }} 
                            underline='none'
                            href=' '
                        >
                            Privacy Policy
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link 
                            sx={{
                                color:'#b2aeae', 
                                '&:hover':{
                                    color:'#b22222',
                                    transition:'0.3s',
                                }
                            }} 
                            underline='none'
                            href=' '
                        >
                            Warranty
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link 
                            sx={{
                                color:'#b2aeae', 
                                '&:hover':{
                                    color:'#b22222',
                                    transition:'0.3s',
                                }
                            }} 
                            underline='none'
                            href=' '
                        >
                            Return/Refund Policy
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link 
                            sx={{
                                color:'#b2aeae', 
                                '&:hover':{
                                    color:'#b22222',
                                    transition:'0.3s',
                                }
                            }} 
                            underline='none'
                            href=' '
                        >
                            Terms & Conditions
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>


{/* RightSide */}
        <Box
            sx={{
                width:'50%',
                fontFamily:'Roboto',
                color:'#000',
                fontSize: 10,
                paddingTop:'35px',
            }}
        >
            <Link 
                href=' '
            >
                <img
                    src='/Picture/muses-white-logo.png'
                    alt='muse-white-logo'
                />
            </Link>
            <Box
                sx={{
                    display:'flex',
                    alignContent:'center',
                    width: '100%',
                    color:'#fff',
                    flexWrap:'wrap',
                    margin:'30px 0',
                }}
            >
                <Box
                    sx={{
                        width:'45%',
                        marginRight:'10px',
                        fontSize:12,
                    }}
                >
                    <iframe 
                        src='https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Muses%20Cabinets,%202760%20pacific%20drive,%20suite%20a,%20norcross,%20ga%2030071+(Muses%20Cabinets)&t=&z=14&ie=UTF8&iwloc=B&output=embed'
                    />
                    <p>
                        <strong>Atlanta, GA</strong> 2760 Pacific Drive, Suite A, Norcross, GA 30071, United States
                    </p>
                </Box>
                <Box
                    sx={{
                        width:'45%',
                        marginLeft:'10px',
                        fontSize:12,
                    }}
                >
                    <iframe
                        src='https://maps.google.com/maps?width=100%25&height=200&hl=en&q=Muses%20Cabinates,%201300%20S%20Milliken%20Ave,%20Ontario,%20CA%2091761,%20United%20States+(Muses%20Cabinates)&t=&z=14&ie=UTF8&iwloc=B&output=embed'
                    />
                    <p>
                        <strong>Ontario, CA</strong> 1822 E Francis St, Suite B Ontario, CA 91761, United States
                    </p>
                </Box>
                <Box
                    sx={{
                        fontSize:14,
                        paddingTop:'10px',
                    }}
                >
                        <strong>Email:</strong> <Link  color='#fff' href=' '>info@musescabinets.com</Link>
                        <br/><br/>
                        <strong>Contact Number:</strong><Link  color='#fff' href=' '>800-806-0708</Link>
                        <br/><br/>
                        <strong>Fax Number:</strong><Link  color='#fff' href=' '>909-927-8333</Link>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}
export default Relationship;