import { Button, Container, Grid } from "@mui/material"
import { border } from "@mui/system"
import React, { useRef } from "react"
import { Link, Redirect, Route, useHistory } from "react-router-dom"
import { getProfile } from "../components/navbar/NavbarManager"
import "./Auth.css"
import { Register } from "./Register"


export const Login = ({ profile, setProfile }) => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()


    const getProfileInfo = () => {

        getProfile()
            .then(
                (response) => {
                    setProfile(response)
                }
            )

    }


    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("token", res.token)
                    getProfileInfo()
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <>

            <Container style={{ display: "flex", flexDirection: "column" }}>
                <dialog className="dialog dialog--auth" ref={invalidDialog}>
                    <div>Username or password was not valid.</div>
                    <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
                </dialog>
                <Grid container>
                    <Grid item xs={12}>Spotter</Grid>
                    <Grid item border={"3px red solid"}>

                        <form className="form--login" onSubmit={handleLogin}>

                            <h2>Please sign in</h2>
                            <div>
                                <label htmlFor="inputUsername"> Username </label>
                                <input ref={username} type="username" id="username" className="form-control" placeholder="Username" required autoFocus />
                            </div>
                            <fieldset>
                                <label htmlFor="inputPassword"> Password </label>
                                <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                            </fieldset>
                            <fieldset style={{
                                textAlign: "center"
                            }}>
                                <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                            </fieldset>
                        </form>
                    </Grid>

                </Grid>
                <section className="link--register">
                    <Button onClick={
                        () => {
                            history.push("/register")
                        }
                    }>Register</Button>
                </section>
            </Container>

        </>)
}
