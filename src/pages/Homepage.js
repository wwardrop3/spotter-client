import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { getExercises } from "../auth/AuthManager"


export const Homepage = ({ profile }) => {

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

            <Container xs={12} style={{ border: "3px orange solid", minHeight: "100vh" }}>

                <Grid container className="">
                    <Typography variant="h5" fontFamily={"cursive"}>
                        <div>Welcome {profile?.user.first_name}</div>
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