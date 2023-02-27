import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, Grid  } from '@mui/material'
import PrevNextBtn from './prevNextBtn'

export function TechCard(props) {
    
    const logValue = (_) =>{
        console.log(_.target.textContent)
    }

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
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Leopard_2_A7.JPG/640px-Leopard_2_A7.JPG"
                sx={{
                    width: 1,
                    objectFit: "contain"
                }}
            />
            <CardContent>
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={12}>
                    <Button sx={{ width: 1}} variant={"outlined"} onClick={logValue}>
                        <Typography variant="button" color="initial">
                            T-72obr.2016
                        </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                  <Button sx={{width: 1}} variant={"outlined"} onClick={logValue}>
                        <Typography variant="button" color="initial" >
                            Leopard2A6
                        </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                  <Button sx={{width: 1}} variant={"outlined"} onClick={logValue}>
                        <Typography variant="button" color="initial">
                            BTR-60
                        </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                  <Button sx={{width: 1}}  variant={"outlined"} onClick={logValue}>
                        <Typography variant="button" color="initial">
                            Ka-52
                        </Typography>
                    </Button>
                  </Grid>
                </Grid>
            </CardContent>
            <CardContent sx={{ justifyContent: "space-around", display: "flex"}}>
                <PrevNextBtn/>
            </CardContent>
        </Card>
    )
}
