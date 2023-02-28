import { Button, Typography } from '@mui/material'
import React from 'react'

export function StartPage({onClick}) {
    
    return (
        <>
            <Typography variant='h2' textAlign="center" justifyContent="center">Technikos atpazinimo testas</Typography>
            <Button onClick={onClick} color="success" variant={'outlined'} >Pradeti testa</Button>
        </>
    )
}
