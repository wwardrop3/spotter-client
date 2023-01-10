import { Button, Typography } from "@mui/material"
import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const bio = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const profileImageUrl = useRef()
    const [errorMessage, setErrorMessage] = useState("")
    const history = useHistory()





    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current?.value === verifyPassword.current.value) {

            console.log(email.current?.value)
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "bio": bio.current.value,
                "password": password.current.value,
                "email": email.current?.value,
                "profile_image_url": profileImageUrl.current?.value
            }

            if (newUser.profile_image_url == "") {
                newUser.profile_image_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("token", res.token)
                        history.push("/")
                    }

                    else if ("username error" in res) {
                        setErrorMessage("Username already exists")
                        passwordDialog.current.showModal()
                    }
                })
        } else {
            setErrorMessage("Passwords do not match")
            passwordDialog.current.showModal()

        }
    }




    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>{errorMessage}</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login">
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input ref={email} type="text" name="email" className="form-control" placeholder="Email Address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="bio"> Bio </label>
                    <textarea ref={bio} name="bio" className="form-control" placeholder="Let others know a little bit about you..." />
                </fieldset>

                <fieldset>
                    <label htmlFor="profile_image_url"> Profile Image </label>
                    <textarea ref={bio} name="profile_image_url" className="form-control" placeholder="Enter your profile image url" />
                </fieldset>

                <fieldset style={{ textAlign: "center" }}>
                    <Button onClick={(e) => handleRegister(e)}>Submit</Button>
                </fieldset>


                <section className="link--register">
                    Already registered? <Link to="/login">Login</Link>
                </section>
            </form>
        </main>
    )
}
