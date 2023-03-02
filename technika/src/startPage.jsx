import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

export function StartPage({onClick}) {
    
    return (
        <Paper align="center">
            <Typography variant='h2' textAlign="center" justifyContent="center">Technikos atpazinimo testas</Typography>
            <Button onClick={onClick} color="success" variant='contained' sx={{my: 2}}>Pradeti testa</Button>
        </Paper>
        )
};
