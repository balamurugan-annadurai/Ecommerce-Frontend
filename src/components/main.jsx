import React from "react";
import banner from "../assets/banner.jpg"

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-md-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={banner}
            alt="Card"
          />

        </div>
      </div>
    </>
  );
};

export default Home;
