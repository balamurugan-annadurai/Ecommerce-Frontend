import React, { useState } from "react";
import { Navbar } from "../components";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup"
import toast from "react-hot-toast";
import ReactLoading from 'react-loading';

const HelpPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: yup.object({
      name: yup.string().required("*"),
      email: yup.string().email("Invalid email").required("*"),
      message: yup.string().required("*")
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      const userDetails = {
        userName: values.name.trim(),
        emailId: values.email.trim(),
        message: values.message.trim()
      }

      axios.post("user/sendmail", userDetails).then(res => {
        try {
          if (res?.data?.message === "mail send") {
            setIsLoading(false);
            toast.success("Message send successful");
            formik.resetForm();
          }
        } catch (error) {
          setIsLoading(false);
          toast.error("Error, Please try again later.");
        }
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
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div class="form my-3">
                <div className="d-flex gap-1">

                  <label for="Name">Name</label>
                  {formik.touched.name && formik.errors.name ? (
                    <div className='text-danger'>{formik.errors.name}</div>
                  ) : null}
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  {...formik.getFieldProps("name")}

                />
              </div>
              <div class="form my-3">
                <div className="d-flex gap-1">

                  <label for="Email">Email</label>
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
                <div className="d-flex gap-1">

                  <label for="Password">Message</label>
                  {formik.touched.message && formik.errors.message ? (
                    <div className='text-danger'>{formik.errors.message}</div>
                  ) : null}
                </div>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                  {...formik.getFieldProps("message")}
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
