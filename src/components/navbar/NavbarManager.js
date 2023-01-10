import { host } from "../.."


export const getProfile = () => {

    return fetch(`${host}/profiles`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
}