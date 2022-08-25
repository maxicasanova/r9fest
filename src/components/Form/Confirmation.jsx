import { Box, Typography } from '@mui/material'

import React from 'react'

function Confirmation() {
    return (
        <Box 
            sx={{
                minHeight:'100vh', 
                display:'flex', 
                flexDirection:'column', 
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Typography variant="h2" 
                sx={{
                    backgroundColor:'#121212', 
                    fontWeight:700, 
                    fontSize:{xs:'14px', sm:'20px'},
                    background: 'rgba(0, 0, 0, 0.48)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(15.3px)',
                    border: '1px solid rgba(255, 255, 255, 0.52)',
                    padding:'30px',
                    maxWidth:'80vw'
                    }}>
                Muchas gracias por haber participado.
            </Typography>
        </Box>
    )
}

export default Confirmation