import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { getExercises } from "../auth/AuthManager"


export const Homepage = () => {


    const [exercises, setExercises] = useState()


    useEffect(
        () => {
            getExercises()
                .then(
                    (response) => {
                        setExercises(response)
                    }
                )
        }, []
    )


    return (

        <>

            <Container maxWidth="lg">

                <Grid container className="">
                    <Typography varient="h2">
                        Homepage
                    </Typography>
                </Grid>

                <Grid container>


                    <Grid item>

                        {/* iterates through each exercise to show the name --- showing only */}
                        <ul>
                            {exercises?.map(exercise => {
                                return (
                                    <>
                                        <Typography variant="body1">
                                            <li>{exercise.name}</li>

                                        </Typography>



                                    </>
                                )
                            })}


                        </ul>



                    </Grid>


                </Grid>


            </Container>

        </>
    )
}