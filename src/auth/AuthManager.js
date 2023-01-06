import { host } from ".."


export const login = () => {

    return fetch(`${host}/login`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `token ${localStorage.getItem('token')}`
        }
    }
    )
        .then(res => res.json)

}


export const getExercises = () => {
    return fetch(`${host}/exercises`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}