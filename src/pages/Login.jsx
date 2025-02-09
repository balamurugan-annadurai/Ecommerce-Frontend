import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from "axios";
import Cookies from "js-cookie"
import toast from "react-hot-toast";
import ReactLoading from 'react-loading';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const loginApi = async (body) => {
    try {
      const res = await axios.post("user/login", body);
      return res;
    } catch (error) {
      console.log(error);

    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("*"),
      password: yup.string().required("*")
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      loginApi(values).then
        (
          res => {
            if (res?.data?.token) {
              Cookies.set("timzzJwtToken", res.data.token, { expires: 1 })
              Cookies.set("isUserLogged", true)
              formik.resetForm();
              setIsLoading(false)
              navigate("/");
              toast.success("Logged")
            }
            else {
              setIsLoading(false)
              toast.error(res.data.message)
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
      </div>
    </>
  )
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div class="my-3">
                <div className="d-flex gap-1">
                  <label>Enter your Email ID</label>
                  {formik.touched.email && formik.errors.email ? (
                    <div className='text-danger'>{formik.errors.email}</div>
                  ) : null}
                </div>
                <input
                  type="email"
                  class="form-control"
                  placeholder="email@xyz.com"
                  {...formik.getFieldProps("email")}
                />
              </div>

              <div class="my-3">
                <div className="d-flex">
                  <label>Enter your Password</label>
                  {formik.touched.password && formik.errors.password ? (
                    <div className='text-danger'>{formik.errors.password}</div>
                  ) : null}
                </div>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to="/register" className="text-decoration-underline text-info">Register</Link>
                <Link to="/forgot-password" className="text-decoration-underline text-info">Forgot Password</Link>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
