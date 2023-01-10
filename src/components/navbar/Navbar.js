import { Button, Container, Grid, SvgIcon, Typography } from "@mui/material"

import { useEffect, useState } from "react"
import { getProfile } from "./NavbarManager"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Navbar = ({ profile, setProfile }) => {





    return (
        <>

            <Container xs={12} style={{ border: "3px green solid", display: "flex", justifyContent: "space-around" }}>

                {profile ? profile.first_name
                    : ""}


                <Grid item>
                    <Button>
                        Home
                    </Button>

                </Grid>

                <Grid item>
                    <Button>
                        Plans
                    </Button>
                </Grid>

                <Grid item>
                    <Button>
                        Exercises
                    </Button>
                </Grid>

                <Grid items display={"flex"}>

                    <Button variant="contained" endIcon={<AccountCircleIcon />}>{profile?.user.first_name}</Button>
                </Grid>








            </Container>

        </>
    )
}