import React from 'react'
import { Footer, Navbar } from "../components";
import appleWatch from "../assets/product-7.jpg"
import samsung from "../assets/product-10.jpg"
import titan from "../assets/product-11.jpg"
import fastrack from "../assets/product-18.jpg"

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to Timzzz, your trusted destination for premium smartwatches that seamlessly combine style, functionality, and innovation. We are passionate about providing our customers with the latest smartwatch technology, designed to enhance daily life and elevate personal well-being. Our collection features top brands like Apple, Samsung, and Titan, offering a wide range of options to meet your unique needs.

          At Timzzz, we prioritize quality and customer satisfaction. Our team is dedicated to delivering exceptional service, ensuring every purchase is smooth and hassle-free. We offer fast, reliable shipping, and easy returns to give you peace of mind with every order. Our expert staff is always available to assist you in choosing the perfect smartwatch to match your lifestyle.

          We understand that our customers are the heart of our business, and we strive to exceed expectations by providing personalized support and expert advice. Whether you're looking for a fitness tracker, a stylish accessory, or a high-tech gadget, we have something for everyone. Shop with us today and experience the perfect blend of convenience, technology, and customer care.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={appleWatch} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Apple</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={samsung} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Samsung</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={titan} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Titan</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={fastrack} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Fastrack</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage