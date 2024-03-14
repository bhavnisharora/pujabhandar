import React from "react";

const subtitle = "save the day";
const title = (
  <h2 className="title">
    Join on day free long workshop for
    <b>Advance</b>
    <span>Mastering</span>
  </h2>
);

const desc = "Limited the offer! Hurry Up";
const Register = () => {
  return (
    <div className="register-section padding-tb pb-0 mt-10">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subtitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Register Now</h4>
              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="your username please"
                  className="reg-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="reg-input"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="your phone number"
                  className="reg-input"
                />
                <button type="submit" className="lab-btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
