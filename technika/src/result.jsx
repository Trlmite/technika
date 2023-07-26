import { List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

export function Result({results}) {
    
    console.log(results)

    return (
        <>
            <Paper>
                <Typography>results</Typography>
                <List>
                    {results.map((answer, i) => {
                       return <ListItem key={i}>
                            <Typography>Pasirinktas atsakymas: {answer.uAnswer}</Typography>
                            <Typography>Teisingas atsakymas: {answer.answer}</Typography>
                        </ListItem>
                    })}
                </List>  
            </Paper>   
        </>
    )
}
