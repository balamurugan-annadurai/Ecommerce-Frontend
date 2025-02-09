import React, { useState } from "react";
import { Navbar } from "../components";
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from "axios";
import toast from "react-hot-toast";
import ReactLoading from 'react-loading';

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [showConformMsg, setShowConformMsg] = useState(false)


    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid email").required("*"),
        }),
        onSubmit: (values) => {
            setIsLoading(true);
            const userDetails = {
                email: values.email.trim(),
            }
            axios.post("/user/forgotpassword", userDetails).then(res => {
                setIsLoading(false);
                if (res.data.message === "User not found") {
                    toast.error("User not registered")
                }
                else if (res.data.message === "User found") {
                    toast.success("Verification email sent")

                    setShowConformMsg(true);
                }
            }).catch(err => {
                setIsLoading(false);
                toast.error("Please try again later"); // Notification
            })
        }
    });

    if (isLoading) return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                <ReactLoading type="spinningBubbles" color="#000" />
            </div>
        </>
    )
    if (showConformMsg) return (
        <>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh" }}>
                <div className="p-6 bg-white rounded-lg shadow-md text-center max-w-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Password Reset Link Sent</h2>
                    <p className="text-gray-500">
                        A password reset link has been sent to your email. Please check your inbox to reset your password.
                    </p>
                </div>
            </div>
        </>

    )
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Forgot Password</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        {showConformMsg && (
                            <div className="alert alert-success">
                                Password reset link has been sent to your email. Please check it.
                            </div>
                        )}
                        <form onSubmit={formik.handleSubmit}>
                            <div className="my-3">
                                <div className="d-flex gap-1">
                                    <label>Enter your Email ID</label>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-danger">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="email@xyz.com"
                                    {...formik.getFieldProps("email")}
                                />
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Forgot Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
