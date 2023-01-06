import { Container, Typography } from "@mui/material"
import { border } from "@mui/system"
import { Redirect, Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Homepage } from "./pages/Homepage"


export const Spotter = () => {


  const token = localStorage.getItem('token')

  return (
    <>

      <Container maxWidth="lg" >


        {
          // If user token already logged in, load navbar and application views
          token
            ?
            <Route>

              <ApplicationViews />
            </Route>
            :
            <Redirect to="/login" />
        }

        <Route exact path="/login" >
          <Login />
        </Route>

      </Container>





    </>
  )
}