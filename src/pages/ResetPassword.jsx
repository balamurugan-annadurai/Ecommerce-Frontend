import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components";
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from "axios";
import toast from "react-hot-toast";
import ReactLoading from 'react-loading';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const { verificationString } = useParams();

  // State to track if the verification string is valid
  const [verified, setVerified] = useState();

  // State to track if the link has expired
  const [linkExpired, setLinkExpired] = useState(false);
  useEffect(() => {
    // POST Call
    axios.post("/user/verifystring", { verificationString }).then(res => {
      setIsLoading(false);
      if (res?.data?.message === "matched") {
        setVerified(true);
      }
      else {
        setVerified(false);
        setLinkExpired(true);
      }
      if (res.data.message === "link expired") {
        setLinkExpired(true)
        toast.error("Password reset link expried")
        navigate('/login')
      }
    })
  }, [verificationString])


  const formik = useFormik({
    initialValues: {
      newPassword: "",
      conformPassword: ""
    },
    validationSchema: yup.object({
      newPassword: yup
        .string()
        .required("*"),
      conformPassword: yup
        .string()
        .required("*")
        .oneOf([yup.ref('newPassword'), null], "Passwords must match")  // This ensures both passwords match
    }),
    onSubmit: async (values) => {

      const newPassword = values.conformPassword
      setIsLoading(true);
      try {
        const response = await axios.post("/user/changepassword", { verificationString, newPassword })
        setIsLoading(false);
        if (response.data.message === "Password changed") {
          toast.success("Password reset successfully");
          formik.resetForm();
          navigate("/login");
        }

      } catch (error) {
        setIsLoading(false);
        toast.error("Failed to reset password"); // Notification
      }
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
  if (linkExpired) return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh" }}>
        <div className="p-6 bg-white rounded-lg shadow-md text-center max-w-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Password Reset link expried</h2>
          <p className="text-gray-500">
            Your Password reset link has been expired, try again
          </p>
        </div>
      </div>
    </>
  )
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Reset Password</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div class="my-3">
                <div className="d-flex gap-1">
                  <label>New Password</label>
                  {formik.touched.newPassword && formik.errors.newPassword ? (
                    <div className='text-danger'>{formik.errors.newPassword}</div>
                  ) : null}
                </div>
                <input
                  type="password"
                  class="form-control"
                  {...formik.getFieldProps("newPassword")}
                />
              </div>

              <div class="my-3">
                <div className="d-flex gap-2">
                  <label>Conform Password</label>
                  {formik.touched.conformPassword && formik.errors.conformPassword ? (
                    <div className='text-danger'>{formik.errors.conformPassword}</div>
                  ) : null}
                </div>
                <input
                  type="password"
                  class="form-control"
                  {...formik.getFieldProps("conformPassword")}
                />
              </div>

              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default ResetPassword;
