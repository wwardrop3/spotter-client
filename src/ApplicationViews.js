import { Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Navbar } from "./components/navbar/Navbar"
import { Homepage } from "./pages/Homepage"


// Application views will load only if the user is logged in

export const ApplicationViews = () => {
    return (
        <>

            <Navbar />

            <Route exact path="/register">
                <Register />
            </Route>

            <Route path={["/home", "/"]}>
                <Homepage />
            </Route>
        </>
    )
}