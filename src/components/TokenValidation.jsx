import { useEffect } from 'react'
import Cookies from "js-cookie"
import axios from 'axios';

const TokenValidation = ({ children }) => {
    useEffect(() => {
        const token = Cookies.get("timzzJwtToken");
        const isUserLogged = Cookies.get("isUserLogged");

        if (isUserLogged === "true" && token) {

            axios.post("user/verifyToken", { token }).then(res => {
                if (!res?.data?.isVaild) {
                    Cookies.set("isUserLogged", false)
                }
            })
        }
        else {
            Cookies.set("isUserLogged", false)
        }

    }, [])
    return children
}

export default TokenValidation