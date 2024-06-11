import { Box } from '@mui/material';

export default function Contact() {

    return(
        <div
            style={{
                display:'flex',
                position:'static',
                flexDirection:'column',
            }}
        >
            <div
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    width:'100%',
                    height: 90,
                    fontSize: 14,
                    background:'#a22223',
                    fontFamily:'Open Sans',
                    fontWeight:400,
                    color:'white',
                    textAlign:'center',
                    marginTop: -10,
                    marginBottom: 5,
                    marginLeft: 0,
                    marginRight: 0,
                    padding: 0,
                }}
            >
                <h1>Now Offering <u><em>Glass Shower Door</em></u> at Atlanta Location! Contact Us to Learn More!</h1>
            </div>

            <div
                style={{ 
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    width:'100%',
                    height: 20,
                    fontWeight:400,
                    fontSize: 14,
                    background:'#232323',
                    fontFamily:'Roboto',
                    fontStyle:'normal',
                    color:'#d6d6d6',
                    textAlign:'center',
                    marginTop: -5,
                    marginBottom: 5,
                    marginLeft: 0,
                    marginRight: 0,
                    padding: 0,
            }}
            >
                <div
                    style={{ 
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        width:'100%', 
                        marginLeft: 150,
                        unicodeBidi: 'isolate',
                        }}
                >
                    <a>800-806-0708</a>
                    <Box 
                        sx={{
                            backgroundColor:'background.paper',
                            m: 2,
                            borderColor: 'text.primary',
                            width: '0.px',
                            height: 12,
                            borderLeft: 1,
                        }}
                    />
                    <a>info@musescabinets.com</a>
                </div>
            </div>
        </div>
    );
}