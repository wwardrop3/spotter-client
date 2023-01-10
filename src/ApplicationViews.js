import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Navbar } from "./components/navbar/Navbar"
import { getProfile } from "./components/navbar/NavbarManager"
import { Homepage } from "./pages/Homepage"


// Application views will load only if the user is logged in

export const ApplicationViews = ({ profile }) => {








    return (
        <>



            <Container style={{ border: "3px blue solid" }}>

                <Route path={["/home", "/"]}>
                    <Homepage profile={profile} />
                </Route>

            </Container>
        </>
    )
}