import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, Grid  } from '@mui/material'
import PrevNextBtn from './prevNextBtn'

export function TechCard({question, back, forward}) {
    

    return (
        <Card >
            <CardContent>
                <Typography variant="body1" color="initial" align= "center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, aut!
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="300"
                image={question.imgUrl}
                sx={{
                    width: 1,
                    objectFit: "contain"
                }}
            />
            <CardContent>
                <Grid container spacing={2} direction={"row"}>
                  {question.variants.map(variant => {
                    return <Grid item xs={12} >
                                <Button sx={{width: 1}} variant={"outlined"} value={variant} >
                                    <Typography variant="button" color="initial" >{variant}</Typography>
                                </Button>
                            </Grid>
                  })}
                </Grid>
            </CardContent>
            <CardContent sx={{ justifyContent: "space-around", display: "flex"}}>
                <PrevNextBtn
                    back={back}
                    forward={forward}
                />
            </CardContent>
        </Card>
    )
}
