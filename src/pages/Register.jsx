import React, { useState } from 'react'
import { Navbar } from "../components";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from 'axios';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showConformMsg, setShowConformMsg] = useState(false)

    const registerApi = async (body) => {
        try {
            const res = await axios.post("user/register", body);
            return res;
        } catch (error) {
            console.log(error);

        }
    }
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid email").required("*"),
            password: yup.string().required("*"),
            firstName: yup.string().required("*"),
            lastName: yup.string().required("*")
        }),
        onSubmit: (values) => {
            setIsLoading(true)
            const userDetails = {
                email: values.email.trim(),
                firstName: values.firstName.trim(),
                lastName: values.lastName.trim(),
                password: values.password.trim()
            }
            registerApi(userDetails).then

                (
                    res => {
                        if (res?.data?.message === "user registered") {
                            setIsLoading(false)
                            setShowConformMsg(true)


                            toast.success(res.data.message)
                        }
                        else {
                            setIsLoading(false)
                            toast.error(res?.data?.message)
                        }

                    }
                )
        }
    });


    if (isLoading) return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                <ReactLoading type="spinningBubbles" color="#000" />
            </div>        </>
    )
    if (showConformMsg) return (
        <>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh" }}>
                <div className="p-6 bg-white rounded-lg shadow-md text-center max-w-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Account activation Link Sent</h2>
                    <p className="text-gray-500">
                        A Account activation  link has been sent to your email. Please check your inbox to activate your account.
                    </p>
                </div>
            </div>
        </>

    )
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={formik.handleSubmit}>
                            <div class="form my-3">
                                <div className="d-flex">
                                    <label for="Name">First name</label>
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div className='text-danger'>{formik.errors.firstName}</div>
                                    ) : null}
                                </div>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    {...formik.getFieldProps("firstName")}
                                />
                            </div>
                            <div class="form my-3">
                                <div className="d-flex">
                                    <label for="Name">Last name</label>
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className='text-danger'>{formik.errors.lastName}</div>
                                    ) : null}
                                </div>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    {...formik.getFieldProps("lastName")}
                                />
                            </div>
                            <div class="form my-3">
                                <div className="d-flex">
                                    <label for="Email">Email address</label>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className='text-danger'>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    {...formik.getFieldProps("email")}
                                />
                            </div>
                            <div class="form  my-3">
                                <div className="d-flex">
                                    <label for="Password">Password</label>
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className='text-danger'>{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    {...formik.getFieldProps("password")}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register