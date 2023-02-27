import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, Grid  } from '@mui/material'

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
                        <Typography variant="h3" color="initial">
                            A
                        </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                  <Button sx={{width: 1}} variant={"outlined"} onClick={logValue}>
                        <Typography variant="h3" color="initial" >
                            B
                        </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                  <Button sx={{width: 1}} variant={"outlined"} onClick={logValue}>
                        <Typography variant="h3" color="initial">
                            C
                        </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                  <Button sx={{width: 1}}  variant={"outlined"} onClick={logValue}>
                        <Typography variant="h3" color="initial">
                            D
                        </Typography>
                    </Button>
                  </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
