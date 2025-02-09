import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import ReactLoading from 'react-loading';

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = ({ userDetails }) => {
    let subtotal = 0;
    let shipping = 190.0;
    let totalItems = 0;

    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleBooking = async (values) => {
      setLoading(true);
      try {
        // Request to create a Razorpay order
        const response = await axios.post('order/create-order', { amount: subtotal });
        const { id, currency, amount: orderAmount } = response.data;

        setLoading(false);

        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: orderAmount,
          currency: currency,
          name: 'Timzzz',
          description: 'Smart watch order',
          order_id: id,
          handler: async function (response) {

            // console.log('Payment successful', response);
            navigate("/product")
            toast.success("Order placed")
          },

          theme: {
            color: '#28523E'
          }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        setLoading(false);
        toast.error("Please try again later.");
        // console.error('Error creating Razorpay order:', error);
      }
    };
    const formik = useFormik({
      initialValues: {
        firstName: userDetails?.firstName || "",
        lastName: userDetails?.lastName || "",
        email: userDetails?.email || "",
        address: "",
        city: "",
        state: "",
        zip: ""
      },
      validationSchema: yup.object({
        firstName: yup.string().required("*"),
        lastName: yup.string().required("*"),
        email: yup.string().email("Invalid email").required("*"),
        address: yup.string().required("*"),
        city: yup.string().required("*"),
        state: yup.string().required("*"),
        zip: yup.string().required("*")
      }),
      onSubmit: (values) => {
        console.log(values);
        handleBooking(values)
      }
    });
    if (loading) return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
      <ReactLoading type="spinningBubbles" color="#000" />
    </div>

    return (
      <div className="container py-2">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({totalItems})<span>₹{Math.round(subtotal)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>₹{shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>₹{Math.round(subtotal + shipping)}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h4 className="mb-0">Billing address</h4>
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <div className="d-flex">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div className='text-danger'>{formik.errors.firstName}</div>
                        ) : null}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        {...formik.getFieldProps("firstName")}
                      />
                    </div>

                    <div className="col-sm-6 my-1">
                      <div className="d-flex">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div className='text-danger'>{formik.errors.lastName}</div>
                        ) : null}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        {...formik.getFieldProps("lastName")}
                      />
                    </div>

                    <div className="col-12 my-1">
                      <div className="d-flex">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        {formik.touched.email && formik.errors.email ? (
                          <div className='text-danger'>{formik.errors.email}</div>
                        ) : null}
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        {...formik.getFieldProps("email")}
                      />
                    </div>

                    <div className="col-12 my-1">
                      <div className="d-flex">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        {formik.touched.address && formik.errors.address ? (
                          <div className='text-danger'>{formik.errors.address}</div>
                        ) : null}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        {...formik.getFieldProps("address")}
                      />
                    </div>

                    <div className="col-md-5 my-1">
                      <div className="d-flex">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        {formik.touched.city && formik.errors.city ? (
                          <div className='text-danger'>{formik.errors.city}</div>
                        ) : null}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        {...formik.getFieldProps("city")}
                      />
                    </div>

                    <div className="col-md-4 my-1">
                      <div className="d-flex">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        {formik.touched.state && formik.errors.state ? (
                          <div className='text-danger'>{formik.errors.state}</div>
                        ) : null}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        {...formik.getFieldProps("state")}
                      />
                    </div>

                    <div className="col-md-3 my-1">
                      <div className="d-flex">
                        <label htmlFor="zip" className="form-label">
                          Zip
                        </label>
                        {formik.touched.zip && formik.errors.zip ? (
                          <div className='text-danger'>{formik.errors.zip}</div>
                        ) : null}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        {...formik.getFieldProps("zip")}
                      />
                    </div>
                  </div>

                  <button className="w-100 btn btn-primary mt-2" type="submit">
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [userDetails, setUserDetails] = useState(null); // Initially null for loading state
  const [isLoading, setIsLoading] = useState(true); // Loading state
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
  }, [navigate]);

  if (isLoading) return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
    <ReactLoading type="spinningBubbles" color="#000" />
  </div>

  return (
    <>
      <Navbar />
      <div className="container my-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout userDetails={userDetails} /> : <EmptyCart />}
      </div>

    </>
  );
};

export default Checkout;
