import { Button, Container, Grid, Typography } from "@mui/material"


export const Navbar = () => {


    return (
        <>

            <Container maxWidth="lg" >

                <Typography variant="h5">
                    <Grid container style={{ display: "flex", justifyContent: "space-around" }}>

                        <Grid item>
                            <Button>
                                Menu
                            </Button>

                        </Grid>

                        <Grid item>
                            <Button>
                                Plans
                            </Button>
                        </Grid>



                    </Grid>
                </Typography>



            </Container>

        </>
    )
}