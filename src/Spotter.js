import { Container, Typography } from "@mui/material"
import { border } from "@mui/system"
import { useState } from "react"
import { Redirect, Route, useHistory } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Navbar } from "./components/navbar/Navbar"
import { Homepage } from "./pages/Homepage"


export const Spotter = () => {


  const token = localStorage.getItem('token')
  const history = useHistory()


  const [profile, setProfile] = useState()



  return (
    <>

      <Container style={{ border: "3px red solid", padding: ".5em" }}>
        {/* if token is found, load navbar and application views */}
        {token
          ?
          <Route>
            <Navbar profile={profile} setProfile={setProfile} />

            {profile ?
              <ApplicationViews profile={profile} />
              : ""}
          </Route>
          :
          history.push("/login")
        }

        {/* if no token found, go to login page */}
        <Route exact path="/login" >
          <Login profile={profile} setProfile={setProfile} />
        </Route>

        <Route exact path={"/register"}>
          <Register />
        </Route>

      </Container>

    </>
  )
}