import { Box, Typography } from '@mui/material'

import React from 'react'

function Confirmation() {
    return (
        <Box sx={{minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <Typography variant="h2" sx={{backgroundColor:'#121212'}}>
                Muchas gracias por haber participado.
            </Typography>
        </Box>
    )
}

export default Confirmation