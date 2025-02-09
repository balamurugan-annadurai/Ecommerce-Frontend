import React, { useEffect, useState } from 'react'
import { Navbar } from '../components'
import user_profile from "../assets/user_profile.jpg"
import "./style.css"
import Cookies from "js-cookie"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ReactLoading from 'react-loading';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get("timzzJwtToken");
        if (token) {
            axios.post("user/verifyToken", { token }).then((res) => {
                setIsLoading(false); // Data fetched, stop loading
                if (!res.data.isVaild) {
                    navigate("/login");
                } else {
                    setUserDetails(res.data.userDetails); // Set user details
                }
            });
        } else {
            navigate("/login");
        }
    }, [navigate])

    if (isLoading) return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <ReactLoading type="spinningBubbles" color="#000" />
    </div>
    return (
        <>
            <Navbar />





            <div className="user-profile container">
                <div className="user_profile-img">
                    <img src={user_profile} alt="" />
                </div>
                <div className="user_profile_content">
                    <h2 className='text-center'>{userDetails.firstName} {userDetails.lastName}</h2>
                    <h3 className='text-center'>{userDetails.email}</h3>
                </div>
                <div className="border"></div>


            </div>



        </>
    )
}

export default Profile