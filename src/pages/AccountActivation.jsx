import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';

const AccountActivation = () => {
    const { token } = useParams()
    console.log(token);
    const navigate = useNavigate();
    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios.get("/user/activateaccount", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.data.message === "activated") {
                setStatus(true);
                navigate("/login");
                toast.success("Account activated")
            }
            else if (res.data.message === "Already activated") {
                setStatus(true);
                navigate("/login");
                toast.success("Account already activated")
            }
        })
    }, [status])
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <ReactLoading type="spinningBubbles" color="#000" />
        </div>
    )
}

export default AccountActivation