import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cookies from "js-cookie"
import axios from 'axios'
import toast from 'react-hot-toast'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    const [isUserLogged, setIsUserLogged] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("timzzJwtToken");
        if (token) {
            axios.post("user/verifyToken", { token }).then((res) => {
                setIsUserLogged(res.data.isVaild)
                console.log(res.data.isVaild);

            });
        } else {
            setIsUserLogged(false)
        }
    }, [])
    const handleLoginLogout = () => {
        if (isUserLogged) {
            Cookies.remove("timzzJwtToken")
            setIsUserLogged(false)
            toast.success("Logged out")

            navigate("/")

        }
        else {
            navigate("/login")
        }
    }
    const handleRegister = () => {
        if (isUserLogged) {
            navigate("/profile")
        }
        else {
            navigate("/register")
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top" >
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Timzzz</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/help">Help</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <button onClick={handleLoginLogout} className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> {isUserLogged ? "Logout" : "Login"}</button>
                        <button onClick={handleRegister} className="btn btn-outline-dark m-2"><i className={isUserLogged ? "fa-solid fa-user" : "fa fa-user-plus mr-1"}></i> {isUserLogged ? "Profile" : "Register"}</button>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar